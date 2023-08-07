<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    "mailgun" => [
        "domain" => env("MAILGUN_DOMAIN"),
        "secret" => env("MAILGUN_SECRET"),
        "endpoint" => env("MAILGUN_ENDPOINT", "api.mailgun.net"),
        "scheme" => "https",
    ],

    "postmark" => [
        "token" => env("POSTMARK_TOKEN"),
    ],

    "ses" => [
        "key" => env("AWS_ACCESS_KEY_ID"),
        "secret" => env("AWS_SECRET_ACCESS_KEY"),
        "region" => env("AWS_DEFAULT_REGION", "us-east-1"),
    ],

    "google" => [
        "client_id" =>
            "120995344657-4ugmdtr3p4sbohlturalk7ef86nhpvkj.apps.googleusercontent.com",
        "client_secret" => "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",
        "redirect" => "http://localhost:8000/auth/google/callback",
    ],

    "github" => [
        "client_id" => "3520665cac6e5f9a2669",
        "client_secret" => "99013e93733fc55cc78ea1409919109b2df17038",
        "redirect" => "http://localhost:8000/auth/github/callback",
    ],
];
