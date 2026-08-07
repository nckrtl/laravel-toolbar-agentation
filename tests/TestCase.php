<?php

declare(strict_types=1);

namespace NckRtl\Toolbar\Agentation\Tests;

use NckRtl\Toolbar\Agentation\AgentationServiceProvider;
use NckRtl\Toolbar\ToolbarServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;

class TestCase extends Orchestra
{
    protected function defineEnvironment($app): void
    {
        $app['config']->set('app.key', 'base64:'.base64_encode(random_bytes(32)));
    }

    protected function getPackageProviders($app): array
    {
        return [
            ToolbarServiceProvider::class,
            AgentationServiceProvider::class,
        ];
    }
}
