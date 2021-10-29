<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VehicleStagesCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->vehicle_stage->id,
            'order' => $this->order_no,
            'vehicle' => $this->vehicle_stage->vehicle->number_plate,
            'destination_depot' => $this->vehicle_stage->depot->name,
            'vehicle_status' => $this->vehicle_stage->stage->name,
            'order_status' => $this->delivery->name,
        ];
    }
}
