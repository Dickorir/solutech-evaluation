<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderDeliveryCollection;
use App\Models\OrderDelivery;
use Illuminate\Http\Request;

class OrderDeliveryController extends Controller
{
    public function index()
    {
        // return all orders deliveries
        $data = OrderDelivery::get();

        return $this->sendResponse(OrderDeliveryCollection::collection($data), 'Orders Delivery');
    }
}
