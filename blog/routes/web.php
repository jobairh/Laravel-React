<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\homeController;


Route::get('/getCourseFeatures',[homeController::class, 'getCourseFeatures'])->name('getCourseFeatures');
Route::get('/getCoursePlan',[homeController::class, 'getCoursePlan'])->name('getCoursePlan');
Route::get('/getPaymentGuide',[homeController::class, 'getPaymentGuide'])->name('getPaymentGuide');
Route::get('/getMoreSeries',[homeController::class, 'getMoreSeries'])->name('getMoreSeries');



Route::get('/', function () {
    return view('index');
});

Route::get('{reactRoutePath}', function () {
    return view('index');
})->where('reactRoutePath', '.*');


