<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::name('login')->post('/login', 'Api/v1/AuthController@login');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
  'prefix' => '/v1/',
  'namespace' => 'Api\v1'
], function () {
  Route::resource('get-posts', 'PostsController')->only(['index', 'store', 'update', 'destroy', 'show']);
  Route::get('get-tags', 'TagsController@getTags');
});