<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    //
    public function user()
	{
	  return $this->belongsTo(User::class);
	}

	public function comments()
	{
	  return $this->hasMany(Comment::class);
	}

	public function tags()
	{
	  return $this->belongsToMany(Tag::class, 'post_tags', 'post_id', 'tag_id');
	}
}
