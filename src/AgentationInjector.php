<?php

declare(strict_types=1);

namespace NckRtl\Toolbar\Agentation;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Vite;
use NckRtl\Toolbar\Data\Layout\GroupConfig;
use NckRtl\Toolbar\Data\Tools\AgentationTool;
use NckRtl\Toolbar\Toolbar;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Injects the prebuilt Agentation runtime into responses that also carry the
 * toolbar, so the toolbar's Agentation tool has something to activate.
 */
class AgentationInjector
{
    public function inject(Request $request, mixed $response): void
    {
        if (! $this->shouldInject($request, $response)) {
            return;
        }

        $bundle = Bundle::asset();

        if ($bundle === null) {
            return;
        }

        /** @var Response $response */
        $content = $response->getContent();

        if ($content === false) {
            return;
        }

        $position = strripos($content, '</body>');

        if ($position === false) {
            return;
        }

        $content = substr($content, 0, $position)
            .$this->html($bundle)
            .substr($content, $position);

        $response->setContent($content);

        if ($response->headers->has('Content-Length')) {
            $response->headers->set('Content-Length', (string) strlen($content));
        }
    }

    protected function html(string $bundle): string
    {
        $nonce = $this->nonceAttribute();
        $src = url('/_toolbar-agentation/'.$bundle);
        $settings = json_encode([
            'endpoint' => $this->endpoint(),
        ], JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES);

        return <<<HTML

        <!-- Laravel Toolbar Agentation -->
        <script{$nonce}>window.__TOOLBAR_AGENTATION__ = {$settings};</script>
        <script src="{$src}" defer data-navigate-once{$nonce}></script>
        <!-- End Laravel Toolbar Agentation -->

        HTML;
    }

    protected function endpoint(): ?string
    {
        $endpoint = config('toolbar-agentation.endpoint');

        return is_string($endpoint) && $endpoint !== '' ? rtrim($endpoint, '/') : null;
    }

    protected function nonceAttribute(): string
    {
        $nonce = Vite::cspNonce();

        return $nonce ? " nonce=\"{$nonce}\"" : '';
    }

    protected function shouldInject(Request $request, mixed $response): bool
    {
        if (! Toolbar::isEnabled() || ! Toolbar::$visible) {
            return false;
        }

        if (! $this->agentationToolIsConfigured()) {
            return false;
        }

        if ($request->ajax()) {
            return false;
        }

        if ($response instanceof BinaryFileResponse || $response instanceof StreamedResponse) {
            return false;
        }

        if (! $response instanceof Response) {
            return false;
        }

        $contentType = $response->headers->get('Content-Type');

        return ! ($contentType && ! str_contains($contentType, 'html'));
    }

    /**
     * The runtime is only worth shipping when the toolbar actually renders the
     * Agentation tool — it is the only thing that can activate it.
     */
    protected function agentationToolIsConfigured(): bool
    {
        if (! app()->bound(Toolbar::class)) {
            return false;
        }

        $component = new AgentationTool()->component();

        foreach (app(Toolbar::class)->config->layout->sections as $groups) {
            foreach ($groups as $group) {
                if ($group instanceof GroupConfig && isset($group->tools[$component])) {
                    return true;
                }
            }
        }

        return false;
    }
}
