<?php

/**
 * Created by PhpStorm.
 * User: David Musyoka
 * Date: 6/29/2018
 * Time: 3:11 PM
 */
namespace App\Helpers;

use App\Models\Order;
use App\Models\Vehicle;
use App\Models\VehicleStage;
use Illuminate\Support\Facades\DB;

class GeneralHelper
{
    public static function checkOrder($request)
    {
        $delivered = Order::where('id',$request->order_id)->where('delivery_id',4)->first();
        // if order is delivered it cannot be transported again
        if ($delivered){
            return [1,'That order is already delivered'];
        }

        // check the current status of an order
        $order = VehicleStage::where('order_id',$request->order_id)->latest()->first();
        /*if ($order->delivery_id == 1){
            $res = [1,'That order is already pending'];
        }*/
        if ($order->delivery_id == 2){
            $res = [1,'That order is already loading'];
        }
        elseif ($order->delivery_id == 3){
            $res = [1,'That order is already dispatched'];
        }
        else{
            $res = [0,''];
        }
        return $res;
    }
    public static function checkVehicle($request)
    {
        $vehicle = Vehicle::where('id',$request->vehicle_id)->first();
        // if order is delivered it cannot be transported again
        if ($vehicle->stage_id == 9){
            return [1,'That order is already delivered'];
        }

        // check the current status of an order
        $order = VehicleStage::where('vehicle_id',$request->vehicle_id)->latest()->first();
        /*if ($order->stage_id == 1){
            $res = [1,'That vehicle is available'];
        }*/
        if ($order->stage_id == 2){
            $res = [1,'That vehicle is loading'];
        }
        elseif ($order->stage_id == 3){
            $res = [1,'That vehicle is On Transit'];
        }
        else{
            $res = [0,''];
        }
        return $res;
    }

}
