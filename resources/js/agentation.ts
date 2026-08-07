import { Agentation, loadAnnotations } from "agentation";
import { createRoot, type Root } from "react-dom/client";
import { jsx } from "react/jsx-runtime";

type Settings = {
    endpoint?: string | null;
};

declare global {
    interface Window {
        __TOOLBAR_AGENTATION__?: Settings;
        __TOOLBAR_AGENTATION_MOUNTED__?: boolean;
    }
}

const CONTAINER_ID = "toolbar-agentation-root";
const STYLE_ID = "toolbar-agentation-styles";

/**
 * Agentation renders its own floating toolbar. The laravel-toolbar owns when
 * that becomes visible: its Agentation tool adds `agentation-visible` on
 * activation and hides itself through `toolbar-external-active`.
 */
function injectStyles(): void {
    if (document.getElementById(STYLE_ID)) {
        return;
    }

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
        [data-agentation-toolbar] { display: none !important; }
        [data-agentation-toolbar].agentation-visible { display: block !important; }
        #laravel-toolbar-shadow-host.toolbar-external-active {
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.15s ease;
        }
    `;
    document.head.appendChild(style);
}

function annotationCount(): number {
    try {
        return loadAnnotations(window.location.pathname).length;
    } catch {
        return 0;
    }
}

function publishCount(count: number): void {
    window.dispatchEvent(
        new CustomEvent("toolbar:agentation:state", {
            detail: { annotationCount: count },
        }),
    );
}

function mount(): void {
    if (window.__TOOLBAR_AGENTATION_MOUNTED__) {
        return;
    }
    window.__TOOLBAR_AGENTATION_MOUNTED__ = true;

    injectStyles();

    const endpoint = window.__TOOLBAR_AGENTATION__?.endpoint || undefined;

    const container = document.createElement("div");
    container.id = CONTAINER_ID;
    document.body.appendChild(container);

    const root: Root = createRoot(container);
    let count = annotationCount();

    const render = (): void =>
        root.render(
            jsx(Agentation, {
                // Remounting on navigation lets Agentation pick up the new
                // pathname, which scopes both its storage and its session.
                key: window.location.pathname,
                endpoint,
                onAnnotationAdd: () => publishCount(++count),
                onAnnotationDelete: () => publishCount(--count),
                onAnnotationsClear: () => publishCount((count = 0)),
            }),
        );

    const resync = (): void => {
        count = annotationCount();
        publishCount(count);
        render();
    };

    render();
    publishCount(count);

    window.addEventListener("popstate", resync);
    document.addEventListener("inertia:navigate", resync);

    // The toolbar asks for state whenever its Agentation tool mounts, which
    // includes remounts after an SPA navigation.
    window.addEventListener("toolbar:agentation:request-state", () => publishCount(count));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
} else {
    mount();
}
