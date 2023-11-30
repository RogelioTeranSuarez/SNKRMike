<?php

use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;


Route::post('login', [RegisterController::class, 'login']);

Route::middleware('auth:api')->group(function () {
});
