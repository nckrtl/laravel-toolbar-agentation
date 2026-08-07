<?php

declare(strict_types=1);

namespace NckRtl\Toolbar\Agentation;

/**
 * Locates the prebuilt runtime that ships with the package.
 */
class Bundle
{
    public const FILENAME = 'agentation.js';

    public static function path(string $asset = self::FILENAME): string
    {
        return __DIR__.'/../build/'.basename($asset);
    }

    /**
     * The runtime filename with a content hash appended, so browsers pick up a
     * new bundle after a package update while still caching aggressively.
     */
    public static function asset(): ?string
    {
        $path = self::path();

        if (! file_exists($path)) {
            return null;
        }

        return self::FILENAME.'?v='.substr((string) hash_file('xxh128', $path), 0, 12);
    }
}
