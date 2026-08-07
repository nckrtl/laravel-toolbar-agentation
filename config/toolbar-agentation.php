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
     * The agentation-mcp sync server. Annotations are pushed here so the agent
     * can read them over MCP. Set to null to keep annotations in localStorage
     * only.
     */
    'endpoint' => env('LARAVEL_TOOLBAR_AGENTATION_ENDPOINT', 'http://localhost:4747'),
];
