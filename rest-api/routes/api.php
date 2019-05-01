<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/pasien/index', 'createpasien@index');
Route::post('/pasien/register', 'createpasien@register');
Route::post('/pasien/loginpost', 'createpasien@loginpost');
Route::post('/pasien/update', 'createpasien@update');


Route::post('/data_dokter/update', 'data_dokter@update');
Route::get('/data_dokter/index', 'data_dokter@index');


Route::post('/jadwal_dokterz/masukin', 'jadwal_dokterz@masukin');
Route::post('/jadwal_dokterz/jadwal', 'jadwal_dokterz@jadwal');