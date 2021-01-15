<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function myProfile() {
        $array = ['error' => ''];
        $user = auth()->user();
        if($user) {
            $array['profile'] = $user;
        }

        return $array;        
    }
}
