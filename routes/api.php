<?php

use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\DepotController;
use App\Http\Controllers\FleetController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDeliveryController;
use App\Http\Controllers\StageController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\VehicleStagesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::get('vehicles', [VehicleController::class,'index']);
    Route::get('deliveries', [DeliveryController::class,'index']);
    Route::get('depots', [DepotController::class,'index']);
    Route::get('orders', [OrderController::class,'index']);
    Route::get('stage', [StageController::class,'index']);
    Route::get('vehicle-stages', [VehicleStagesController::class,'index']);
    Route::get('order-deliveries', [OrderDeliveryController::class,'index']);

    Route::get('fleet', [FleetController::class,'index']);
    Route::post('fleet', [FleetController::class,'store']);
    Route::get('fleet/{id}', [FleetController::class,'show']);
    Route::delete('fleet/{id}', [FleetController::class,'destroy']);
});
