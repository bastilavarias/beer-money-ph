<?php

use App\Http\Controllers\AuthProviderController;
use App\Http\Controllers\EmployerDashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/", function (Request $request) {
    return Inertia::render("Welcome", [
        "user" => Auth::check() ? Auth::user() : null,
    ]);
});

Route::middleware(["guest"])
    ->get("/sign-in", function () {
        return Inertia::render("SignIn");
    })
    ->name("sign-in");

Route::middleware(["guest"])->get("/sign-up", function () {
    return Inertia::render("SignUp");
});

Route::middleware(["auth"])->get("/employer/dashboard", [
    EmployerDashboardController::class,
    "index",
]);

Route::prefix("auth")->group(function () {
    Route::get("/{provider}/redirect", [
        AuthProviderController::class,
        "redirect",
    ]);
    Route::get("/{provider}/callback", [
        AuthProviderController::class,
        "callback",
    ]);
    Route::middleware(["auth"])
        ->post("/logout", [AuthProviderController::class, "logout"])
        ->name("logout");
});

require __DIR__ . "/auth.php";
