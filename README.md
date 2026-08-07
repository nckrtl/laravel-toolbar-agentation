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
    'endpoint' => env('LARAVEL_TOOLBAR_AGENTATION_ENDPOINT', 'http://localhost:4747'),
];
```

Set `endpoint` to `null` to keep annotations in `localStorage` only, without an
MCP server.

### Content Security Policy

If your app sends a CSP, allow the sync server as a connect source in
development:

```php
$policy->add(Directive::CONNECT, 'http://localhost:4747');
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
