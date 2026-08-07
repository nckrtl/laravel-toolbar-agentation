<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use NckRtl\Toolbar\Agentation\Controllers\AssetController;

Route::prefix('_toolbar-agentation')->middleware(['web'])->group(function (): void {
    Route::get('/{asset}', AssetController::class)
        ->where('asset', '[A-Za-z0-9._-]+')
        ->name('toolbar-agentation.assets');
});
