<?php

namespace App\Http\Controllers;

use App\Helpers\GeneralHelper;
use App\Http\Resources\VehicleStagesCollection;
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $data = Order::has('vehicle_stage')->latest()->get();

        return $this->sendResponse(VehicleStagesCollection::collection($data), 'Orders Deliveries');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // receive in request = order_id, delivery_id(order status), vehicle_id, stage_id(veh status),depot_id(destination)

        $vehicle = GeneralHelper::checkVehicle($request);
        if ($vehicle[0] == 1){
            return $this->sendError(1, $vehicle[1]);
        }

        // check order status
        $order = GeneralHelper::checkOrder($request);
        if ($order[0] == 1){
            return $this->sendError(1, $order[1]);
        }

        // insert vehicle_stages with vehicle_id, stage_id, order_id,  depot_id,
        DB::beginTransaction();
        try {
            // check if the vehicle is Pending if not its engaged
            $create = VehicleStage::create([
                "vehicle_id" => $request->vehicle_id,
                "stage_id" => $request->stage_id,
                "order_id" => $request->order_id,
                "depot_id" => $request->depot_id
            ]);

            //update stage_id in vehicle table
            Vehicle::where('id',$request->vehicle_id)->update(['stage_id' => $create->stage_id]);

            //update delivery_id with status in orders table
            Order::where('id',$request->order_id)->update(['delivery_id' => $request->delivery_id]);
            // if delivered, update depot_id in orders and vehicle_id to new depot
            if ($request->delivery_id == 'Delivered'){
                Order::where('id',$request->order_id)->update(['depot_id' => $create->depot_id ]);
                Vehicle::where('id',$request->vehicle_id)->update(['depot_id' => $create->depot_id]);
            }
            DB::commit();
            return $this->sendResponse(0, 'Successful allocated');
        }
        catch (\Exception $e) {
            DB::rollback();
//            throw $e;
            return $this->sendError(1, $e->getMessage());
        } catch (\Throwable $e) {
            DB::rollback();
//            throw $e;
            return $this->sendError(1, $e->getMessage());
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
        $data = Order::whereHas('vehicle_stage', function ($query) use ($id) {
            $query->where('id', $id);
        })->first();

        return $this->sendResponse(VehicleStagesCollection::make($data), 'Orders Delivery');
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $veh = VehicleStage::find($id);
        $veh->delete();

        return $this->sendResponse('0', 'Fleet successfully deleted');
    }
}
