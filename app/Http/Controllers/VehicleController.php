<?php

namespace App\Http\Controllers;

use App\Http\Resources\VehicleCollection;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends BaseController
{
    public function index()
    {
        // return all vehicles
        $data = Vehicle::with('depot','stage')->get();

        return $this->sendResponse(VehicleCollection::collection($data), 'All Vehicles.');
    }
}
