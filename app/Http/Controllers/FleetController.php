<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Vehicle;
use App\Models\VehicleStage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FleetController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = VehicleStage::distinct()->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // receive in request
        // order_id, delivery_id(order status), vehicle_id, stage_id(veh status),depot_id(destination)

        // insert vehicle_stages with vehicle_id, stage_id, order_id,  depot_id,
        DB::beginTransaction();
        try {
            $create = VehicleStage::create([
                "vehicle_id" => $request->vehicle_id,
                "stage_id" => $request->stage_id,
                "order_id" => $request->order_id,
                "depot_id" => $request->depot_id
            ]);
            //update stage_id in vehicle table
            Vehicle::where('vehicle_id',$request->vehicle_id)->update(['stage_id' => $create->stage_id]);

            //update delivery_id with status in orders table
            Order::where('order_id',$request->order_id)->update(['delivery_id' => $request->delivery_id]);
            // if delivered, update depot_id in orders and vehicle_id to new depot
            if ($request->delivery_id == 'Delivered'){
                Order::where('order_id',$request->order_id)->update(['depot_id' => $create->depot_id ]);
                Vehicle::where('vehicle_id',$request->vehicle_id)->update(['depot_id' => $create->depot_id]);
            }
            DB::commit();
            return $this->sendResponse(0, 'Successful allocated');
        }
        catch (\Exception $e) {
            DB::rollback();
//            throw $e;
            return $this->sendError(1, $e);
        } catch (\Throwable $e) {
            DB::rollback();
            return $this->sendError(1, $e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
