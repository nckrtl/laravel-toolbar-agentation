<?php

declare(strict_types=1);

return [
    /*
     * Master switch. Even when enabled, the runtime is only injected on pages
     * where the toolbar itself renders and the AgentationTool is part of the
     * toolbar layout.
     */
    'enabled' => env('LARAVEL_TOOLBAR_AGENTATION_ENABLED', true),

    /*
     * The agentation-mcp HTTP sync server URL. Annotations are pushed here so
     * the agent can read them over MCP. Leave unset (null) to keep annotations
     * in localStorage only — no hard-coded localhost fallback.
     *
     * Orbit projects this as AGENTATION_URL when a per-app agentation Process
     * is running; without it the toolbar stays local-only.
     */
    'endpoint' => env('AGENTATION_URL'),
];
