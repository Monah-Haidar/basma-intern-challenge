<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        // validate user input
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:users',
            'password' => 'required| min:6',
        ]);

        // hash password
        $fields['password'] = Hash::make($fields['password']);

        // create user
        $user = User::create($fields);

        return $user;
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response([
                'message' => 'Invalid Credentials'
            ], Response::HTTP_UNAUTHORIZED);
        }

        // get authenticated user
        $user = Auth::user();

        // create token
        $token = $user->createToken('jwt')->plainTextToken;
        

        // set cookie
        $cookie = cookie(
            'jwt',
            $token,
            1 * 24,
            null,
            null,
            true,
            true,
            false
        );

        return response([
            'message' => 'User Logged In Successfully',
            'user' => $user,
            'token' => $token,
            'cookie' => $cookie
        ])->withCookie($cookie);
    }


    public function logout()
    {
        // Revoke all tokens for the user
        Auth::user()->tokens()->delete();

        // remove cookie
        $cookie = cookie()->forget('jwt');

        return response([
            'message' => 'User Logged Out Successfully',
        ])->withCookie($cookie);
    }


    public function user()
    {
        return Auth::user();
    }

}
