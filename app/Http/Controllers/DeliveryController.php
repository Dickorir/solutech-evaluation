<?php

namespace App\Http\Controllers;

use App\Http\Resources\DeliveryCollection;
use App\Models\Delivery;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{
    public function index()
    {
        // return all delivery options
        $data = Delivery::get();

        return $this->sendResponse(DeliveryCollection::collection($data), 'All Delivery status.');
    }
}
