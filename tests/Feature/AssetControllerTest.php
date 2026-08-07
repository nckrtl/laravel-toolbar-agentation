<?php

declare(strict_types=1);

use NckRtl\Toolbar\Agentation\Bundle;

it('serves the runtime bundle', function (): void {
    $this->get('/_toolbar-agentation/'.Bundle::FILENAME)
        ->assertOk()
        ->assertHeader('Content-Type', 'application/javascript');
});

it('does not serve anything else from the package', function (): void {
    $this->get('/_toolbar-agentation/composer.json')->assertNotFound();
});
