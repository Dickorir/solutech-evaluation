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
            'id' => $this->id,
            'order' => $this->order->order_no,
            'vehicle' => $this->vehicle->number_plate,
            'destination_depot' => $this->depot->name,
            'vehicle_status' => $this->stage->name,
            'order_status' => $this->order->delivery->name,
        ];
    }
}
