<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends BaseController
{
    public function index()
    {
        // return all orders
        $data = Order::get();

        return $this->sendResponse(OrderCollection::collection($data), 'Orders');
    }
}
