<?php

declare(strict_types=1);

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use NckRtl\Toolbar\Agentation\AgentationInjector;
use NckRtl\Toolbar\Agentation\Bundle;
use NckRtl\Toolbar\Data\Layout\GroupConfig;
use NckRtl\Toolbar\Data\Tools\AgentationTool;
use NckRtl\Toolbar\Data\Tools\BreakpointIndicatorTool;
use NckRtl\Toolbar\Toolbar;

function withTools(...$tools): void
{
    $toolbar = new Toolbar;
    // Tests run in the console, where the toolbar is off unless opted in.
    $toolbar->config->enabledInConsole = true;
    $toolbar->config->layout->addGroup(new GroupConfig()->setTools(...$tools));

    app()->instance(Toolbar::class, $toolbar);
}

function injectInto(string $html, ?Request $request = null): string
{
    $response = new Response($html, 200, ['Content-Type' => 'text/html']);

    app(AgentationInjector::class)->inject($request ?? Request::create('/'), $response);

    return (string) $response->getContent();
}

beforeEach(function (): void {
    Toolbar::$enabled = true;
    Toolbar::$visible = true;
    withTools(new AgentationTool);
});

it('injects the runtime before the closing body tag', function (): void {
    $html = injectInto('<html><body><h1>Hi</h1></body></html>');

    expect($html)
        ->toContain('/_toolbar-agentation/'.Bundle::FILENAME)
        ->and(strpos($html, '_toolbar-agentation'))->toBeLessThan(strpos($html, '</body>'));
});

it('exposes the configured endpoint to the runtime', function (): void {
    config()->set('toolbar-agentation.endpoint', 'http://localhost:4747/');

    expect(injectInto('<html><body></body></html>'))
        ->toContain('"endpoint":"http://localhost:4747"');
});

it('passes a null endpoint when syncing is disabled', function (): void {
    config()->set('toolbar-agentation.endpoint', null);

    expect(injectInto('<html><body></body></html>'))->toContain('"endpoint":null');
});

it('does not inject when the toolbar has no agentation tool', function (): void {
    withTools(new BreakpointIndicatorTool);

    expect(injectInto('<html><body></body></html>'))->not->toContain('_toolbar-agentation');
});

it('does not inject when the toolbar is hidden', function (): void {
    Toolbar::$visible = false;

    expect(injectInto('<html><body></body></html>'))->not->toContain('_toolbar-agentation');
});

it('does not inject into ajax requests', function (): void {
    $request = Request::create('/');
    $request->headers->set('X-Requested-With', 'XMLHttpRequest');

    expect(injectInto('<html><body></body></html>', $request))->not->toContain('_toolbar-agentation');
});

it('does not inject into non-html responses', function (): void {
    $response = new Response('{"ok":true}', 200, ['Content-Type' => 'application/json']);

    app(AgentationInjector::class)->inject(Request::create('/'), $response);

    expect((string) $response->getContent())->not->toContain('_toolbar-agentation');
});

it('leaves responses without a body tag untouched', function (): void {
    expect(injectInto('just text'))->toBe('just text');
});

it('keeps content-length in sync when the header is present', function (): void {
    $response = new Response('<html><body></body></html>', 200, [
        'Content-Type' => 'text/html',
        'Content-Length' => '26',
    ]);

    app(AgentationInjector::class)->inject(Request::create('/'), $response);

    expect($response->headers->get('Content-Length'))
        ->toBe((string) strlen((string) $response->getContent()));
});

it('busts the asset cache when the bundle changes', function (): void {
    expect(Bundle::asset())->toMatch('/^'.preg_quote(Bundle::FILENAME, '/').'\?v=[0-9a-f]{12}$/');
});
