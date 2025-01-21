<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware extends Authenticate
{
    // public function handle(Request $request, Closure $next): Response
    // {
    //     $jwt = $request->cookie('jwt');

    //     if (!$jwt) {
    //         return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
    //     }


    //     // dd($jwt);
    //     $request->headers->set('Authorization', 'Bearer ' . $jwt);

    //     return $next($request);
    // }


    public function handle($request, Closure $next, ...$guards)
    {

        $jwt = $request->cookie('jwt');


        $suffix = explode("|", $jwt)[1];
        dd($suffix);


        if ($suffix) {
            $request->headers->set('Authorization', 'Bearer ' . $jwt);
            echo 'akal';
        }



        $this->authenticate($request, $guards);

        return $next($request);
    }
}
