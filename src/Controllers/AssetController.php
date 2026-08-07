<?php

declare(strict_types=1);

namespace NckRtl\Toolbar\Agentation\Controllers;

use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use NckRtl\Toolbar\Agentation\Bundle;

class AssetController extends Controller
{
    public function __invoke(string $asset): Response
    {
        $path = Bundle::path($asset);

        if (basename($asset) !== Bundle::FILENAME || ! file_exists($path)) {
            abort(404);
        }

        return response((string) file_get_contents($path))
            ->header('Content-Type', 'application/javascript')
            ->header('Cache-Control', 'public, max-age=31536000, immutable');
    }
}
