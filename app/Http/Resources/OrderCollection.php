<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderCollection extends JsonResource
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
            'order' => $this->order_no ?? '',
            'depot' => $this->depot->name ?? '',
//            'depot' => $this->vehicle_stage->depot->name ?? '',
            'vehicle' => $this->vehicle_stage->vehicle->number_plate ?? '',
            'order_status' => $this->delivery->name ?? '',
        ];
    }
}
