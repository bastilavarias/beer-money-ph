<?php

namespace App\Http\Controllers;

use App\Models\JobCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmployerDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render("EmployerDashboard", [
            "user" => Auth::user(),
            "job_categories" => JobCategory::all(),
        ]);
    }
}
