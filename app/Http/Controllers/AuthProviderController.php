<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class AuthProviderController extends Controller
{
    public function redirect(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback(string $provider)
    {
        $oauthUser = Socialite::driver($provider)->user();
        $user = User::where(["email" => $oauthUser->getEmail()]);
        if ($user->doesntExist()) {
            $user = User::create([
                "provider" => $provider,
                "provider_id" => $oauthUser->getId(),
                "provider_token" => $oauthUser->token,
                "first_name" => $oauthUser->user["given_name"],
                "last_name" => $oauthUser->user["family_name"],
                "email" => $oauthUser->getEmail(),
                "email_verified_at" => now(),
                "picture" => $oauthUser->user["picture"],
            ]);
        } else {
            $user = tap($user)->update([
                "provider" => $provider,
                "provider_id" => $oauthUser->getId(),
                "provider_token" => $oauthUser->token,
            ]);
        }
        Auth::login($user->first(), true);

        return Inertia::render("", [
            "user" => Auth::user(),
        ]);
    }
}
