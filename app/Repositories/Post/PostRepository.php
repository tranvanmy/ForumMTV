<?php

namespace App\Repositories\Post;

use App\Models\Post;

/**
 * 
 * Class Repositories
 */
class PostRepository
{
    public function all()
    {
        return Post::all();
    }

    public function find($id)
    {
        return Post::find($id);
    }
}