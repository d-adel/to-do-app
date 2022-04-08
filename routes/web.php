<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemsController;
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

Route::get('/', function () {
    return view('home');
});

Route::get('get/todolist', [ItemsController::class, 'getToDoList']);

Route::get('get/item/{id}', [ItemsController::class, 'getItem']);

Route::post('update/item/description', [ItemsController::class, 'updateItemDescription']);

Route::post('update/item/finished', [ItemsController::class, 'updateItemFinished']);

Route::delete('delete/item/{id}', [ItemsController::class, 'destroy']);

Route::post('create/item', [ItemsController::class, 'insert']);