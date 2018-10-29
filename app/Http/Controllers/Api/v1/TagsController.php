<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tag;

class TagsController extends Controller
{
    public function getTags(Request $request)
	{
	  $tags = Tag::all();

	  return response()->json([
	    'status' => 1,
	    'message' => 'Success',
	    'data' => $tags
	  ]);
	}
}
