<?php

declare(strict_types=1);

namespace NckRtl\Toolbar\Agentation;

use Illuminate\Foundation\Http\Events\RequestHandled;
use Illuminate\Support\Facades\Event;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class AgentationServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package
            ->name('laravel-toolbar-agentation')
            ->hasConfigFile()
            ->hasRoutes('toolbar-agentation');
    }

    public function packageBooted(): void
    {
        if (! config('toolbar-agentation.enabled', true)) {
            return;
        }

        Event::listen(RequestHandled::class, function (RequestHandled $event): void {
            app(AgentationInjector::class)->inject($event->request, $event->response);
        });
    }
}
