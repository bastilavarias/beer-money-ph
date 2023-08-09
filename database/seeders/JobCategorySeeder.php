<?php

namespace Database\Seeders;

use App\Models\JobCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class JobCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            "Online Surveys",
            "Microtasks",
            "Paid Offers",
            "Watching Videos",
            "Clicking Ads",
            "Playing Games",
            "Mystery Shopping",
            "Crowdsourcing",
        ];
        foreach ($data as $key) {
            JobCategory::create([
                "name" => $key,
                "slug" => Str::slug($key, "-"),
            ]);
        }
    }
}
