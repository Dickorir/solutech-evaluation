<?php

namespace App\Http\Controllers;

use App\Http\Resources\VehicleCollection;
use App\Http\Resources\VehicleStagesCollection;
use App\Models\VehicleStage;
use Illuminate\Http\Request;

class VehicleStagesController extends Controller
{
    public function index()
    {
        // return all orders
        $data = VehicleStage::get();

        return $this->sendResponse(VehicleStagesCollection::collection($data), 'Vehicle Stages');
    }
}
