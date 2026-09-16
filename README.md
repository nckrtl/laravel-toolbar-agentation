# Laravel Toolbar Agentation

[Agentation](https://www.npmjs.com/package/agentation) visual annotations as a
[Laravel Toolbar](https://github.com/nckrtl/laravel-toolbar) addon.

Click a spot on your page, type what is wrong, and your coding agent reads it
over MCP. The runtime ships prebuilt with this package: no npm dependency, no
Vite plugin, and no bundler configuration in the host app. It works the same in
a React, Vue, Livewire or plain Blade application.

## Installation

```bash
composer require --dev nckrtl/laravel-toolbar-agentation
```

Add the tool to your toolbar layout (usually
`app/Providers/ToolbarConfigProvider.php`):

```php
use NckRtl\Toolbar\Data\Tools\AgentationTool;

$layout->addGroup(
    (new GroupConfig(priority: 20))
        ->addTool(new AgentationTool)
        ->section(Section::RIGHT)
);
```

Run the MCP server so annotations reach your agent:

```bash
npx -y agentation-mcp server
```

The toolbar now shows a sparkle icon. Clicking it hides the toolbar and opens
the Agentation annotation bar; leaving annotation mode brings the toolbar back.

## How it works

The package injects a single prebuilt script before `</body>`, but only when
every one of these holds:

- `toolbar-agentation.enabled` is true
- the toolbar itself is enabled and visible for the request
- `AgentationTool` is part of the toolbar layout
- the response is a non-AJAX HTML response

The script mounts Agentation into its own DOM root and its own React root, so
it never touches the host app's rendering. Communication with the toolbar runs
over two DOM events (`toolbar:agentation:request-state` and
`toolbar:agentation:state`) plus the `agentation-visible` class, which is the
contract the toolbar's Agentation tool already speaks.

## Configuration

```bash
php artisan vendor:publish --tag=laravel-toolbar-agentation-config
```

```php
return [
    'enabled' => env('LARAVEL_TOOLBAR_AGENTATION_ENABLED', true),
    'endpoint' => env('AGENTATION_URL'),
    'dictation' => [
        'provider' => env('TOOLBAR_DICTATION_PROVIDER', 'diction'), // diction|none
        'ws_url' => env('TOOLBAR_DICTATION_WS_URL', 'wss://diction.orbit/v1/audio/stream'),
        'codec' => env('TOOLBAR_DICTATION_CODEC', 'auto'), // auto|opus|pcm
        'auto_start' => env('TOOLBAR_DICTATION_AUTO_START', true),
    ],
];
```

Leave `AGENTATION_URL` unset (or set `endpoint` to `null`) to keep annotations
in `localStorage` only, without an MCP sync server. When Orbit runs a per-app
agentation-mcp Process it projects `AGENTATION_URL` into the app environment.

### Dictation

The Agentation comment popup includes a microphone control when
`TOOLBAR_DICTATION_PROVIDER=diction`. After you pick an element, recording
starts automatically when the comment popup appears (same path as clicking the
mic). Click the mic again to stop; the transcript is written into the existing
comment field so you can edit and submit as usual. Set
`TOOLBAR_DICTATION_AUTO_START=false` to require an explicit mic click, or
`TOOLBAR_DICTATION_PROVIDER=none` to hide the mic.

Audio goes **directly** to Diction over WebSocket (`wss://diction.orbit/v1/audio/stream`
by default). Laravel does not proxy the stream. Diction must be reachable from
the browser (Orbit's `diction.orbit` host, or your own gateway URL via
`TOOLBAR_DICTATION_WS_URL`).

The runtime prefers MediaRecorder Opus (`audio/webm;codecs=opus` or
`audio/ogg;codecs=opus`) and connects with `?codec=opus`, offering Diction's
`diction.opus.v1` subprotocol. If the browser cannot produce Opus, or Diction
declines the subprotocol, it streams PCM16 little-endian mono at 16 kHz — the
format `/v1/audio/stream` documents as the default. Force either path with
`TOOLBAR_DICTATION_CODEC=opus` or `pcm`.

On stop the client sends `{"action":"done"}` and fills the comment with the
`{"text":"..."}` reply. Mic-denied and WebSocket failures surface next to the
field and do not block typing or submit.

### Content Security Policy

If your app sends a CSP, allow the sync server as a connect source (use the
same host as `AGENTATION_URL`). When dictation is enabled, also allow the
Diction WebSocket:

```php
$policy->add(Directive::CONNECT, env('AGENTATION_URL'));
$policy->add(Directive::CONNECT, env('TOOLBAR_DICTATION_WS_URL', 'wss://diction.orbit'));
```

## Development

```bash
composer test        # Pest
composer analyse     # PHPStan
composer format      # Pint
bun run build        # rebuild build/agentation.js
```

`build/agentation.js` is committed on purpose — it is what makes the package
work without a frontend toolchain in the host app. Rebuild and commit it
whenever the `agentation` dependency is bumped.

## License

MIT
