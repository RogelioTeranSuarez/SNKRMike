<?php

use App\Http\Controllers\InventoryController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UserController;
use App\Models\Product;
use App\Models\Product_category;
use Illuminate\Support\Facades\Route;

Route::view('/{path?}', 'welcome')
    ->where('path', '.*');

Route::get('/', function () {
    return view('welcome');
});
