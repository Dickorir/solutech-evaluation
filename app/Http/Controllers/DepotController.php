<?php

namespace App\Http\Controllers;

use App\Http\Resources\DepotCollection;
use App\Models\Depot;
use Illuminate\Http\Request;

class DepotController extends BaseController
{
    public function index()
    {
        // return all depots
        $data = Depot::get();

        return $this->sendResponse(DepotCollection::collection($data), 'All Depots.');
    }
}
