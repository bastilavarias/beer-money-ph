<?php

use App\Http\Controllers\AuthProviderController;
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
        "user" => session("user_session", []),
    ]);
});

Route::get("/sign-in", function () {
    return Inertia::render("SignIn");
});

Route::get("/sign-up", function () {
    return Inertia::render("SignUp");
});

Route::get("/employer/dashboard", function () {
    return Inertia::render("EmployerDashboard");
});

Route::get("/auth/{provider}/redirect", [
    AuthProviderController::class,
    "redirect",
]);
Route::get("/auth/{provider}/callback", [
    AuthProviderController::class,
    "callback",
]);

//Route::get("/dashboard", function () {
//    return Inertia::render("EmployerDashboard");
//})
//    ->middleware(["auth", "verified"])
//    ->name("dashboard");
//
//Route::middleware("auth")->group(function () {
//    Route::get("/profile", [ProfileController::class, "edit"])->name(
//        "profile.edit"
//    );
//    Route::patch("/profile", [ProfileController::class, "update"])->name(
//        "profile.update"
//    );
//    Route::delete("/profile", [ProfileController::class, "destroy"])->name(
//        "profile.destroy"
//    );
//});

require __DIR__ . "/auth.php";
