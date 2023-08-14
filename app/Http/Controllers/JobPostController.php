<?php

namespace App\Http\Controllers;

use App\Http\Requests\JobPost\CreateJobPostRequest;
use App\Models\JobPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class JobPostController extends Controller
{
    public function store(CreateJobPostRequest $request)
    {
        $jobPost = Auth::user()
            ->job_posts()
            ->create([
                "name" => $request->input("name"),
                "description" => $request->input("description"),
                "budget" => $request->input("budget"),
                "slots" => $request->input("slots"),
                "author_id" => Auth::id(),
            ]);

        return back()->with([
            "code" => 200,
            "message" => "Job post was created.",
            "data" => $jobPost,
        ]);
    }
}
