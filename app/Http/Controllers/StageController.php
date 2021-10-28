<?php

namespace App\Http\Controllers;

use App\Http\Resources\StageCollection;
use App\Models\Stage;
use Illuminate\Http\Request;

class StageController extends Controller
{
    public function index()
    {
        // return all vehicles
        $data = Stage::get();

        return $this->sendResponse(StageCollection::collection($data), 'All Vehicles Stages.');
    }
}
