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
            if ($provider === "google") {
                $firstName = $oauthUser->user["given_name"];
                $lastName = $oauthUser->user["family_name"];
                $picture = $oauthUser->user["picture"];
            } else {
                $name = $this->splitName($oauthUser->getName());
                $firstName = $name["first_name"];
                $lastName = $name["last_name"];
                $picture = $oauthUser->user["avatar_url"];
            }
            $user = User::create([
                "provider" => $provider,
                "provider_id" => $oauthUser->getId(),
                "provider_token" => $oauthUser->token,
                "first_name" => $firstName,
                "last_name" => $lastName,
                "email" => $oauthUser->getEmail(),
                "email_verified_at" => now(),
                "picture" => $picture,
            ]);
        } else {
            $user = tap($user)->update([
                "provider" => $provider,
                "provider_id" => $oauthUser->getId(),
                "provider_token" => $oauthUser->token,
            ]);
        }
        Auth::login($user->first(), true);

        return redirect()->intended();
    }

    public function logout()
    {
        Auth::logout();
        return redirect("/sign-in");
    }

    private function splitName($name)
    {
        $name = trim($name);
        $lastName = !str_contains($name, " ")
            ? ""
            : preg_replace('#.*\s([\w-]*)$#', '$1', $name);
        $firstName = trim(
            preg_replace("#" . preg_quote($lastName, "#") . "#", "", $name)
        );
        return ["first_name" => $firstName, "last_name" => $lastName];
    }
}
