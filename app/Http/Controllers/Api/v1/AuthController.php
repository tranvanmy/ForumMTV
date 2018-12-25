<?php

namespace App\Http\Controllers\Api\v1;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * Verify the request and generate tokens.
     *
     * @param  LoginRequest  $request
     * @return Response
     *
     * @throws Exception
     */
    public function login(Request $request)
    {
    	dd(1);
        $data = Config::get('services.passport') + [
            'username' => $request->input('email'),
            'password' => $request->input('password'),
        ];

        $request = Request::create('/oauth/token', 'POST', $data);

        return App::handle($request);
    }

    /**
     * Revoke the access token from the authenticated user.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        return response()->json(['success' => $request->user()->token()->revoke()]);
    }
}
