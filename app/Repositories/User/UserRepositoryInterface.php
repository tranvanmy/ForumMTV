<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\RepositoryInterface;

/**
 * Interface UserRepositoryInterface
 *
 * @package Framgia\Gmt\Repositories\User
 */
interface UserRepositoryInterface extends RepositoryInterface
{
    /**
     * Find all users matched a given roleId
     *
     * @param int $roleId
     * @param int $groupId | null
     *
     * @return User[]
     */
    // public function findById(int $id);
}
