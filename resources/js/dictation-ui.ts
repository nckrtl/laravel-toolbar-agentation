import { dictate, dictationEnabled, DictationError, type DictationSettings } from "./dictation";

const ROOT_ID = "toolbar-agentation-root";
const BUTTON_ATTR = "data-toolbar-dictation";
const STYLE_ID = "toolbar-agentation-dictation-styles";
const COMMENT_TEXTAREA = 'textarea[class*="styles-module__textarea___"]';
const ACTIONS_ROW = '[class*="styles-module__actions___"]';
const SUBMIT_BUTTON = '[class*="styles-module__submit___"]';
const POPUP = '[class*="styles-module__popup___"], [data-annotation-popup]';
const OUR_UI_SELECTOR = `[${BUTTON_ATTR}], .toolbar-agentation-dictation, .toolbar-agentation-dictation-error, .toolbar-agentation-dictation-autosubmit, .toolbar-agentation-dictation-group`;
const DEFAULT_AUTO_SUBMIT_MS = 5000;

type Session = {
    stop: AbortController;
    abort: AbortController;
    button: HTMLButtonElement;
    state: "recording" | "transcribing";
};

type AutoSubmit = {
    timer: number;
    endsAt: number;
    overlay: HTMLElement | null;
    submit: HTMLButtonElement | null;
    onFocus: (event: FocusEvent) => void;
    onPointer: (event: Event) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onClick: () => void;
};

const sessions = new WeakMap<HTMLTextAreaElement, Session>();
const liveTextareas = new Set<HTMLTextAreaElement>();
/** Textareas that already received an auto-start attempt (one shot per instance). */
const autoStarted = new WeakSet<HTMLTextAreaElement>();
const autoSubmits = new WeakMap<HTMLTextAreaElement, AutoSubmit>();
const autoSubmitTextareas = new Set<HTMLTextAreaElement>();

/**
 * Watches Agentation's comment popup (the CSS-module textarea + actions row)
 * and mounts a click-to-toggle mic. Does not replace element picking — it
 * only fills the existing comment field.
 *
 * Attach is mutation-driven but must never write DOM from inside an observer
 * callback in a way that re-triggers unbounded work: we ignore our own nodes,
 * debounce, and skip setButtonState when the button is already in the desired
 * state (innerHTML rewrites used to feedback-loop the observer and hang the tab).
 */
export function mountDictationUi(settings?: DictationSettings | null): void {
    if (!dictationEnabled(settings) || !settings?.wsUrl) {
        return;
    }

    injectStyles();
    installGlobalKeyHandler(settings);

    let applying = false;
    let debounceTimer = 0;

    const attachAll = (): void => {
        const root = document.getElementById(ROOT_ID);

        if (!root) {
            return;
        }

        applying = true;

        try {
            // Query document: Agentation may portal the comment popup outside the React root.
            document.querySelectorAll<HTMLTextAreaElement>(COMMENT_TEXTAREA).forEach((textarea) => {
                if (isCommentPopup(textarea)) {
                    attachToTextarea(textarea, settings);
                }
            });

            for (const textarea of [...liveTextareas]) {
                if (!document.body.contains(textarea)) {
                    sessions.get(textarea)?.abort.abort();
                    cancelAutoSubmit(textarea);
                    liveTextareas.delete(textarea);
                }
            }

            for (const textarea of [...autoSubmitTextareas]) {
                if (!document.body.contains(textarea)) {
                    cancelAutoSubmit(textarea);
                } else {
                    // React may replace the Submit button; keep the wipe attached.
                    refreshAutoSubmitOverlay(textarea, settings);
                }
            }
        } finally {
            applying = false;
        }
    };

    const scheduleAttach = (): void => {
        if (applying) {
            return;
        }

        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(attachAll, 50);
    };

    const observer = new MutationObserver((mutations) => {
        if (applying) {
            return;
        }

        for (const mutation of mutations) {
            if (mutation.type !== "childList") {
                continue;
            }

            for (const node of mutation.addedNodes) {
                if (!isOurNode(node)) {
                    scheduleAttach();

                    return;
                }
            }

            for (const node of mutation.removedNodes) {
                if (!isOurNode(node)) {
                    scheduleAttach();

                    return;
                }
            }
        }
    });

    // Still watch the document (portals / overlays), but own-node filtering +
    // debounce + idempotent attach prevent the previous innerHTML feedback hang.
    observer.observe(document.documentElement, { childList: true, subtree: true });
    attachAll();
}

function installGlobalKeyHandler(settings: DictationSettings): void {
    if ((window as Window & { __TOOLBAR_DICTATION_KEYS__?: boolean }).__TOOLBAR_DICTATION_KEYS__) {
        return;
    }

    (window as Window & { __TOOLBAR_DICTATION_KEYS__?: boolean }).__TOOLBAR_DICTATION_KEYS__ = true;

    document.addEventListener(
        "keydown",
        (event) => {
            if (event.defaultPrevented || event.isComposing) {
                return;
            }

            if (event.key === "Enter" && !event.shiftKey && !event.metaKey && !event.ctrlKey && !event.altKey) {
                if (!hasLiveRecording()) {
                    return;
                }

                if (isUnrelatedEditable(event.target)) {
                    return;
                }

                if (stopActiveRecording()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                return;
            }

            if (event.key === "Escape" && autoSubmitTextareas.size > 0) {
                for (const textarea of [...autoSubmitTextareas]) {
                    cancelAutoSubmit(textarea);
                }
                // Do not submit; let Agentation handle Escape if the popup is focused.
            }
        },
        true,
    );

    // settings reserved for future keybinding toggles
    void settings;
}

function hasLiveRecording(): boolean {
    for (const textarea of liveTextareas) {
        if (sessions.get(textarea)?.state === "recording") {
            return true;
        }
    }

    return false;
}

function isUnrelatedEditable(target: EventTarget | null): boolean {
    if (!(target instanceof Element)) {
        return false;
    }

    if (target.closest(POPUP) || target.closest(`#${ROOT_ID}`) || target.closest(OUR_UI_SELECTOR)) {
        return false;
    }

    const editable = target.closest('input, textarea, select, [contenteditable=""], [contenteditable=true]');

    return Boolean(editable);
}

function stopActiveRecording(): boolean {
    const active = document.activeElement;

    if (active instanceof HTMLTextAreaElement) {
        const session = sessions.get(active);

        if (session?.state === "recording") {
            beginStop(session);

            return true;
        }
    }

    for (const textarea of liveTextareas) {
        const session = sessions.get(textarea);

        if (session?.state === "recording") {
            beginStop(session);

            return true;
        }
    }

    return false;
}

function beginStop(session: Session): void {
    session.state = "transcribing";
    setButtonState(session.button, "transcribing");
    session.stop.abort();
}

function isOurNode(node: Node): boolean {
    if (node instanceof Element) {
        // Only treat the node as ours if it IS our UI or lives inside it.
        // Do not use querySelector(descendants): a remounted Agentation popup
        // that still contains our mic would look "ours" and skip re-attach.
        return Boolean(node.matches(OUR_UI_SELECTOR) || node.closest(OUR_UI_SELECTOR));
    }

    const parent = node.parentElement;

    return parent ? isOurNode(parent) : false;
}

function isCommentPopup(textarea: HTMLTextAreaElement): boolean {
    return Boolean(
        textarea.closest(`#${ROOT_ID}`)
        || textarea.closest('[class*="styles-module__popup___"]')
        || textarea.closest("[data-annotation-popup]"),
    );
}

function findActions(textarea: HTMLTextAreaElement): HTMLElement | null {
    let node: HTMLElement | null = textarea.parentElement;

    for (let i = 0; i < 4 && node; i++) {
        const actions = node.querySelector<HTMLElement>(ACTIONS_ROW);

        if (actions) {
            return actions;
        }

        node = node.parentElement;
    }

    return null;
}

function findSubmit(textarea: HTMLTextAreaElement): HTMLButtonElement | null {
    const actions = findActions(textarea);
    const button = actions?.querySelector<HTMLButtonElement>(SUBMIT_BUTTON);

    return button instanceof HTMLButtonElement ? button : null;
}

function findError(textarea: HTMLTextAreaElement): HTMLElement | null {
    const actions = findActions(textarea);
    const inline = actions?.querySelector<HTMLElement>(".toolbar-agentation-dictation-error");

    if (inline) {
        return inline;
    }

    // Legacy placement (above field / after textarea) — migrate on attach.
    const next = textarea.nextElementSibling;

    return next instanceof HTMLElement && next.classList.contains("toolbar-agentation-dictation-error")
        ? next
        : null;
}

function ensureErrorBesideMic(textarea: HTMLTextAreaElement, button: HTMLButtonElement, actions: HTMLElement): HTMLElement {
    const legacy = textarea.nextElementSibling instanceof HTMLElement
        && textarea.nextElementSibling.classList.contains("toolbar-agentation-dictation-error")
        ? textarea.nextElementSibling
        : null;

    let group = button.closest(".toolbar-agentation-dictation-group") as HTMLElement | null;

    if (!group) {
        group = document.createElement("span");
        group.className = "toolbar-agentation-dictation-group";

        if (button.hasAttribute("data-toolbar-dictation-lead") || !actions.querySelector('[class*="styles-module__deleteWrapper___"]')) {
            group.setAttribute("data-toolbar-dictation-lead", "1");
            button.removeAttribute("data-toolbar-dictation-lead");
        }

        button.replaceWith(group);
        group.appendChild(button);
    } else if (button.hasAttribute("data-toolbar-dictation-lead")) {
        group.setAttribute("data-toolbar-dictation-lead", "1");
        button.removeAttribute("data-toolbar-dictation-lead");
    }

    let error = group.querySelector<HTMLElement>(".toolbar-agentation-dictation-error");

    if (!error && legacy && legacy.parentElement !== group) {
        error = legacy;
        group.appendChild(error);
    } else if (legacy && legacy !== error) {
        legacy.remove();
    }

    if (!error) {
        error = document.createElement("span");
        error.className = "toolbar-agentation-dictation-error";
        error.hidden = true;
        group.appendChild(error);
    }

    return error;
}

function attachToTextarea(textarea: HTMLTextAreaElement, settings: DictationSettings): void {
    const actions = findActions(textarea);

    if (!actions) {
        return;
    }

    let button = actions.querySelector<HTMLButtonElement>(`[${BUTTON_ATTR}]`);

    if (!button) {
        button = document.createElement("button");
        button.type = "button";
        button.setAttribute(BUTTON_ATTR, "idle");
        button.className = "toolbar-agentation-dictation";
        button.innerHTML = micIcon();

        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleDictation(textarea, button as HTMLButtonElement, settings);
        });
        button.addEventListener("pointerdown", (event) => event.stopPropagation());
        button.addEventListener("mousedown", (event) => event.stopPropagation());

        actions.insertBefore(button, actions.firstChild);
    }

    ensureErrorBesideMic(textarea, button, actions);

    const session = sessions.get(textarea);
    const desired = session?.state ?? "idle";

    if (session) {
        session.button = button;
    }

    // Avoid rewriting innerHTML/attrs when already correct — that used to
    // re-enter the MutationObserver and hang the tab on element pick.
    if (button.getAttribute(BUTTON_ATTR) !== desired) {
        setButtonState(button, desired);
    }

    // One-shot per textarea instance: new popup after element pick starts
    // recording; MutationObserver re-attaches / React re-renders of the same
    // textarea must not restart. Mic click still stops → fill as before.
    maybeAutoStart(textarea, button, settings);
}

function maybeAutoStart(
    textarea: HTMLTextAreaElement,
    button: HTMLButtonElement,
    settings: DictationSettings,
): void {
    if (settings.autoStart === false) {
        return;
    }

    if (autoStarted.has(textarea) || sessions.has(textarea)) {
        return;
    }

    autoStarted.add(textarea);
    void startDictation(textarea, button, settings);
}

function toggleDictation(
    textarea: HTMLTextAreaElement,
    button: HTMLButtonElement,
    settings: DictationSettings,
): void {
    const session = sessions.get(textarea);

    if (session) {
        beginStop(session);
        return;
    }

    void startDictation(textarea, button, settings);
}

async function startDictation(
    textarea: HTMLTextAreaElement,
    button: HTMLButtonElement,
    settings: DictationSettings,
): Promise<void> {
    const error = findError(textarea);
    const stop = new AbortController();
    const abort = new AbortController();
    const session: Session = { stop, abort, button, state: "recording" };

    cancelAutoSubmit(textarea);
    sessions.set(textarea, session);
    liveTextareas.add(textarea);
    hideError(error);
    setButtonState(button, "recording");

    try {
        const text = await dictate({
            wsUrl: settings.wsUrl as string,
            codec: settings.codec,
            stopSignal: stop.signal,
            abortSignal: abort.signal,
        });

        if (text.trim() === "") {
            showError(error, "No audio");
            setButtonState(session.button, "idle");
        } else {
            fillComment(textarea, mergeTranscript(textarea.value, text));
            setButtonState(session.button, "idle");

            const autoSubmitMs = resolveAutoSubmitMs(settings);

            if (autoSubmitMs > 0) {
                // Do not focus after stop→fill: a focused field breaks click-to-
                // interrupt (focus does not re-fire). Blur if already focused.
                startAutoSubmit(textarea, settings, autoSubmitMs);
                blurForAutoSubmit(textarea);
            } else {
                textarea.focus();
            }
        }
    } catch (cause) {
        if (isAbortError(cause)) {
            setButtonState(session.button, "idle");
            return;
        }

        const message = cause instanceof DictationError
            ? cause.message
            : "Dictation failed. You can still type.";

        showError(error, message);
        setButtonState(session.button, "idle");
    } finally {
        sessions.delete(textarea);
        liveTextareas.delete(textarea);
    }
}

function resolveAutoSubmitMs(settings: DictationSettings): number {
    const raw = settings.autoSubmitMs;

    if (typeof raw === "number" && Number.isFinite(raw)) {
        return Math.max(0, Math.floor(raw));
    }

    return DEFAULT_AUTO_SUBMIT_MS;
}

function blurForAutoSubmit(textarea: HTMLTextAreaElement): void {
    if (document.activeElement === textarea) {
        textarea.blur();
    }

    // fillComment / Agentation may re-focus on the next frame; blur again while
    // the countdown is still live so click-to-cancel can work via pointer too.
    requestAnimationFrame(() => {
        if (autoSubmits.has(textarea) && document.activeElement === textarea) {
            textarea.blur();
        }
    });
}

function startAutoSubmit(
    textarea: HTMLTextAreaElement,
    settings: DictationSettings,
    autoSubmitMs: number,
): void {
    cancelAutoSubmit(textarea);

    const submit = findSubmit(textarea);

    if (!submit || submit.disabled) {
        // Cannot auto-submit — allow editing (existing behavior when ms is effectively unused).
        textarea.focus();

        return;
    }

    const overlay = mountAutoSubmitOverlay(submit, autoSubmitMs);

    const onFocus = (): void => {
        cancelAutoSubmit(textarea);
    };

    const onPointer = (): void => {
        // Cancel even if the field was already focused (focus would not re-fire).
        cancelAutoSubmit(textarea);
    };

    const onKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "Escape") {
            cancelAutoSubmit(textarea);
        }
    };

    const onClick = (): void => {
        // Natural submit — drop the timer/overlay; the click proceeds.
        cancelAutoSubmit(textarea, { keepOverlay: false, skipClickCleanup: true });
    };

    const timer = window.setTimeout(() => {
        const current = findSubmit(textarea) ?? submit;

        cancelAutoSubmit(textarea);

        if (document.body.contains(current) && !current.disabled) {
            current.click();
        }
    }, autoSubmitMs);

    textarea.addEventListener("focusin", onFocus);
    textarea.addEventListener("focus", onFocus);
    textarea.addEventListener("pointerdown", onPointer, true);
    textarea.addEventListener("mousedown", onPointer, true);
    textarea.addEventListener("click", onPointer, true);
    submit.addEventListener("click", onClick, { once: true });
    document.addEventListener("keydown", onKeyDown, true);

    autoSubmits.set(textarea, {
        timer,
        endsAt: Date.now() + autoSubmitMs,
        overlay,
        submit,
        onFocus,
        onPointer,
        onKeyDown,
        onClick,
    });
    autoSubmitTextareas.add(textarea);
}

function refreshAutoSubmitOverlay(textarea: HTMLTextAreaElement, settings: DictationSettings): void {
    const state = autoSubmits.get(textarea);

    if (!state) {
        return;
    }

    const submit = findSubmit(textarea);

    if (!submit) {
        return;
    }

    if (state.submit === submit && state.overlay && submit.contains(state.overlay)) {
        return;
    }

    if (state.submit && state.onClick) {
        state.submit.removeEventListener("click", state.onClick);
    }

    if (state.overlay) {
        state.overlay.remove();
    }

    const remaining = Math.max(0, state.endsAt - Date.now());
    if (remaining <= 0) {
        return;
    }
    const overlay = mountAutoSubmitOverlay(submit, remaining);
    const onClick = (): void => {
        cancelAutoSubmit(textarea, { keepOverlay: false, skipClickCleanup: true });
    };

    submit.addEventListener("click", onClick, { once: true });
    state.submit = submit;
    state.overlay = overlay;
    state.onClick = onClick;
}

function mountAutoSubmitOverlay(submit: HTMLButtonElement, durationMs: number): HTMLElement {
    const existing = submit.querySelector<HTMLElement>(".toolbar-agentation-dictation-autosubmit");

    if (existing) {
        existing.remove();
    }

    const computed = window.getComputedStyle(submit);

    if (computed.position === "static") {
        submit.style.position = "relative";
    }

    if (computed.overflow === "visible") {
        submit.style.overflow = "hidden";
    }

    const overlay = document.createElement("span");
    overlay.className = "toolbar-agentation-dictation-autosubmit";
    overlay.setAttribute("aria-hidden", "true");
    overlay.style.setProperty("--toolbar-dictation-autosubmit-ms", `${durationMs}ms`);
    submit.appendChild(overlay);

    return overlay;
}

function cancelAutoSubmit(
    textarea: HTMLTextAreaElement,
    options?: { keepOverlay?: boolean; skipClickCleanup?: boolean },
): void {
    const state = autoSubmits.get(textarea);

    if (!state) {
        autoSubmitTextareas.delete(textarea);

        return;
    }

    window.clearTimeout(state.timer);
    textarea.removeEventListener("focusin", state.onFocus);
    textarea.removeEventListener("focus", state.onFocus);
    textarea.removeEventListener("pointerdown", state.onPointer, true);
    textarea.removeEventListener("mousedown", state.onPointer, true);
    textarea.removeEventListener("click", state.onPointer, true);
    document.removeEventListener("keydown", state.onKeyDown, true);

    if (!options?.skipClickCleanup && state.submit) {
        state.submit.removeEventListener("click", state.onClick);
    }

    if (!options?.keepOverlay && state.overlay) {
        state.overlay.remove();
    }

    autoSubmits.delete(textarea);
    autoSubmitTextareas.delete(textarea);
}

function mergeTranscript(existing: string, incoming: string): string {
    const spoken = incoming.trim();

    if (spoken === "") {
        return existing;
    }

    const current = existing.trimEnd();

    if (current === "") {
        return spoken;
    }

    const glue = /[\s\n]$/.test(existing) ? "" : " ";

    return current + glue + spoken;
}

function fillComment(textarea: HTMLTextAreaElement, value: string): void {
    const prototype = Object.getPrototypeOf(textarea) as HTMLTextAreaElement;
    const descriptor = Object.getOwnPropertyDescriptor(prototype, "value")
        ?? Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value");

    if (descriptor?.set) {
        descriptor.set.call(textarea, value);
    } else {
        textarea.value = value;
    }

    textarea.dispatchEvent(new Event("input", { bubbles: true }));
    textarea.dispatchEvent(new Event("change", { bubbles: true }));
}

function setButtonState(button: HTMLButtonElement, state: "idle" | "recording" | "transcribing"): void {
    button.setAttribute(BUTTON_ATTR, state);
    button.classList.toggle("is-recording", state === "recording");
    button.classList.toggle("is-busy", state === "transcribing");
    button.setAttribute("aria-pressed", state === "recording" ? "true" : "false");

    if (state === "recording") {
        button.setAttribute("aria-label", "Stop dictation");
        button.setAttribute("title", "Stop dictation");
        button.innerHTML = stopIcon();
    } else if (state === "transcribing") {
        button.setAttribute("aria-label", "Transcribing");
        button.setAttribute("title", "Transcribing…");
        button.innerHTML = spinnerIcon();
    } else {
        button.setAttribute("aria-label", "Dictate comment");
        button.setAttribute("title", "Dictate comment");
        button.innerHTML = micIcon();
    }
}

function showError(error: HTMLElement | null, message: string): void {
    if (!error) {
        return;
    }

    error.textContent = message;
    error.hidden = false;
}

function hideError(error: HTMLElement | null): void {
    if (!error) {
        return;
    }

    error.hidden = true;
    error.textContent = "";
}

function isAbortError(error: unknown): boolean {
    return error instanceof DOMException && error.name === "AbortError";
}

function micIcon(): string {
    return `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v3"/><path d="M8 20h8"/></svg>`;
}

function stopIcon(): string {
    return `<span class="toolbar-agentation-dictation-stop" aria-hidden="true"></span>`;
}

function spinnerIcon(): string {
    return `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" class="toolbar-agentation-dictation-spinner" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="8" opacity="0.25"/><path d="M12 4a8 8 0 0 1 8 8"/></svg>`;
}

function injectStyles(): void {
    if (document.getElementById(STYLE_ID)) {
        return;
    }

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
        .toolbar-agentation-dictation-group {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            min-width: 0;
        }
        .toolbar-agentation-dictation-group[data-toolbar-dictation-lead="1"] {
            margin-right: auto;
        }
        .toolbar-agentation-dictation {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            margin-right: 0;
            padding: 0;
            border: none;
            border-radius: 50%;
            background: transparent;
            color: rgba(255, 255, 255, 0.55);
            cursor: pointer;
            transition: background-color 0.15s ease, color 0.15s ease, width 0.1s ease, height 0.1s ease;
            flex: 0 0 auto;
        }
        .toolbar-agentation-dictation:hover {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.9);
        }
        .toolbar-agentation-dictation.is-recording {
            color: #f43f5e;
            background: rgba(244, 63, 94, 0.30);
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
        .toolbar-agentation-dictation-stop {
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 4px;
            background: currentColor;
        }
        .toolbar-agentation-dictation.is-recording .toolbar-agentation-dictation-stop {
            width: 14px;
            height: 14px;
        }
        .toolbar-agentation-dictation.is-busy {
            color: rgba(255, 255, 255, 0.7);
            cursor: progress;
        }
        .toolbar-agentation-dictation-error {
            margin: 0;
            padding: 0;
            font-size: 0.6875rem;
            line-height: 1.2;
            color: #fb7185;
            white-space: nowrap;
            max-width: 9rem;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .toolbar-agentation-dictation-spinner {
            animation: toolbar-agentation-dictation-spin 0.7s linear infinite;
        }
        .toolbar-agentation-dictation-autosubmit {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        }
        .toolbar-agentation-dictation-autosubmit::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            transform: scaleX(0);
            transform-origin: left center;
            background: rgba(255, 255, 255, 0.20);
            animation: toolbar-agentation-dictation-wipe var(--toolbar-dictation-autosubmit-ms, 5000ms) linear forwards;
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation {
            color: rgba(0, 0, 0, 0.45);
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation:hover {
            background: rgba(0, 0, 0, 0.06);
            color: rgba(0, 0, 0, 0.8);
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation.is-recording {
            color: #e11d48;
            background: rgba(225, 29, 72, 0.30);
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation-error {
            color: #e11d48;
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation-autosubmit::before {
            background: rgba(255, 255, 255, 0.20);
        }
        @keyframes toolbar-agentation-dictation-spin {
            to { transform: rotate(360deg); }
        }
        @keyframes toolbar-agentation-dictation-wipe {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
    `;
    document.head.appendChild(style);
}
