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

    /*
     * Click-to-dictate on the Agentation comment popup. The browser talks to
     * Diction directly over WebSocket — Laravel never proxies the audio.
     *
     * Set provider to "none" to hide the mic control.
     *
     * Codec: "auto" prefers MediaRecorder Opus (`?codec=opus`, WebM/Ogg) and
     * falls back to PCM16 LE mono 16 kHz, which is Diction's documented
     * /v1/audio/stream default. Force "opus" or "pcm" to skip detection.
     */
    'dictation' => [
        'provider' => env('TOOLBAR_DICTATION_PROVIDER', 'diction'),
        'ws_url' => env('TOOLBAR_DICTATION_WS_URL', 'wss://diction.orbit/v1/audio/stream'),
        'codec' => env('TOOLBAR_DICTATION_CODEC', 'auto'),
    ],
];
