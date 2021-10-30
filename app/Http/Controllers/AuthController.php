<?php

namespace App\Http\Controllers;

//use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

//use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    public function login(Request $request)
    {

        if(Auth::attempt([ 'email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('Evaluation')->accessToken;
            $success['user'] =  auth()->user();

            return $this->sendResponse($success, 'User login successfully.');
        }
        else{
            return $this->sendError('Unauthorised.', ['error'=>'Either the email/username and password is incorrect']);
        }
    }
}
