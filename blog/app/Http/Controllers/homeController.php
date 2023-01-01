<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\courseFeatureModel;
use App\Models\CoursePlanModel;
use App\Models\PaymentGuideModel;
use App\Models\MoreSeriesModel;

class homeController extends Controller
{
    public function getCourseFeatures(){
        $result = courseFeatureModel::all();
        return $result;
    }

    public function getCoursePlan(){
        $result = CoursePlanModel::all();
        return $result;
    }

    public function getPaymentGuide(){
        $result = PaymentGuideModel::all();
        return $result;
    }

    public function getMoreSeries(){
        $result = MoreSeriesModel::all();
        return $result;
    }
}
