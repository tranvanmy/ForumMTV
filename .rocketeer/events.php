<?php

use Rocketeer\Facades\Rocketeer;

Rocketeer::addTaskListeners('deploy', 'before-symlink', function ($task) {
    // Compile or copy static files.
    $task->runForCurrentRelease('yarn install');
    $task->runForCurrentRelease('yarn run production');
    // Clear compiled things before re-caching.
    $task->runForCurrentRelease('php artisan clear-compiled');
    $task->runForCurrentRelease('php artisan cache:clear');
    $task->runForCurrentRelease('php artisan config:cache');
    $task->runForCurrentRelease('php artisan route:cache');
    $task->runForCurrentRelease('php artisan view:cache');
    // Run automated tasks each deployment time.
    $task->runForCurrentRelease('php artisan migrate --force');
    $task->runForCurrentRelease('php artisan db:seed --force');
});
