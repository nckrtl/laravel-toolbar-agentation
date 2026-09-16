import { dictate, dictationEnabled, DictationError, type DictationSettings } from "./dictation";

const ROOT_ID = "toolbar-agentation-root";
const BUTTON_ATTR = "data-toolbar-dictation";
const STYLE_ID = "toolbar-agentation-dictation-styles";
const COMMENT_TEXTAREA = 'textarea[class*="styles-module__textarea___"]';
const ACTIONS_ROW = '[class*="styles-module__actions___"]';

type Session = {
    stop: AbortController;
    abort: AbortController;
    button: HTMLButtonElement;
    state: "recording" | "transcribing";
};

const sessions = new WeakMap<HTMLTextAreaElement, Session>();
const liveTextareas = new Set<HTMLTextAreaElement>();

/**
 * Watches Agentation's comment popup (the CSS-module textarea + actions row)
 * and mounts a click-to-toggle mic. Does not replace element picking — it
 * only fills the existing comment field.
 */
export function mountDictationUi(settings?: DictationSettings | null): void {
    if (!dictationEnabled(settings) || !settings?.wsUrl) {
        return;
    }

    injectStyles();

    const attachAll = (): void => {
        const root = document.getElementById(ROOT_ID);

        if (!root) {
            return;
        }

        document.querySelectorAll<HTMLTextAreaElement>(COMMENT_TEXTAREA).forEach((textarea) => {
            if (isCommentPopup(textarea)) {
                attachToTextarea(textarea, settings);
            }
        });

        for (const textarea of liveTextareas) {
            if (!document.body.contains(textarea)) {
                sessions.get(textarea)?.abort.abort();
                liveTextareas.delete(textarea);
            }
        }
    };

    const observer = new MutationObserver(attachAll);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    attachAll();
}

function isCommentPopup(textarea: HTMLTextAreaElement): boolean {
    return Boolean(
        textarea.closest(`#${ROOT_ID}`)
        || textarea.closest('[class*="styles-module__popup___"]'),
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

function findError(textarea: HTMLTextAreaElement): HTMLElement | null {
    const next = textarea.nextElementSibling;

    return next instanceof HTMLElement && next.classList.contains("toolbar-agentation-dictation-error")
        ? next
        : null;
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

        if (!actions.querySelector('[class*="styles-module__deleteWrapper___"]')) {
            button.setAttribute("data-toolbar-dictation-lead", "1");
        }

        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleDictation(textarea, button as HTMLButtonElement, settings);
        });
        button.addEventListener("pointerdown", (event) => event.stopPropagation());
        button.addEventListener("mousedown", (event) => event.stopPropagation());

        actions.insertBefore(button, actions.firstChild);
    }

    if (!findError(textarea)) {
        const error = document.createElement("p");
        error.className = "toolbar-agentation-dictation-error";
        error.hidden = true;
        textarea.insertAdjacentElement("afterend", error);
    }

    const session = sessions.get(textarea);

    if (session) {
        session.button = button;
        setButtonState(button, session.state);
    } else {
        setButtonState(button, "idle");
    }
}

function toggleDictation(
    textarea: HTMLTextAreaElement,
    button: HTMLButtonElement,
    settings: DictationSettings,
): void {
    const session = sessions.get(textarea);

    if (session) {
        session.state = "transcribing";
        setButtonState(session.button, "transcribing");
        session.stop.abort();
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
            showError(error, "No speech detected.");
        } else {
            fillComment(textarea, mergeTranscript(textarea.value, text));
            textarea.focus();
        }

        setButtonState(session.button, "idle");
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
    return `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><rect x="7" y="7" width="10" height="10" rx="1.5"/></svg>`;
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
            transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
        }
        .toolbar-agentation-dictation[data-toolbar-dictation-lead="1"] {
            margin-right: auto;
        }
        .toolbar-agentation-dictation:hover {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.9);
        }
        .toolbar-agentation-dictation.is-recording {
            color: #f43f5e;
            background: color-mix(in srgb, #f43f5e 18%, transparent);
            animation: toolbar-agentation-dictation-pulse 1.2s ease-in-out infinite;
        }
        .toolbar-agentation-dictation.is-busy {
            color: rgba(255, 255, 255, 0.7);
            cursor: progress;
        }
        .toolbar-agentation-dictation-error {
            margin: 0.35rem 0 0;
            font-size: 0.6875rem;
            line-height: 1.35;
            color: #fb7185;
        }
        .toolbar-agentation-dictation-spinner {
            animation: toolbar-agentation-dictation-spin 0.7s linear infinite;
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
            background: color-mix(in srgb, #e11d48 14%, transparent);
        }
        [class*="styles-module__light___"] .toolbar-agentation-dictation-error {
            color: #e11d48;
        }
        @keyframes toolbar-agentation-dictation-pulse {
            0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, #f43f5e 45%, transparent); }
            50% { box-shadow: 0 0 0 5px transparent; }
        }
        @keyframes toolbar-agentation-dictation-spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}
