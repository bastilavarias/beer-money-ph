<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("job_posts", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("author_id");
            $table
                ->foreign("author_id")
                ->references("id")
                ->on("users")
                ->onDelete("cascade");
            $table->string("name");
            $table->text("description");
            $table->decimal("budget", 15, 2);
            $table->integer("slots")->nullable();
            $table->boolean("is_completed")->default(0);
            $table->dateTime("completed_at")->nullable();
            $table->boolean("is_closed")->default(0);
            $table->dateTime("closed_at")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("job_posts");
    }
};
