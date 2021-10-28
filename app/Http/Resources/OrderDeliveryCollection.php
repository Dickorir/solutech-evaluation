<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderDeliveryCollection extends JsonResource
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
            'order' => $this->order_id,
            'delivery' => $this->delivery_id,
            'created' => $this->created_at,
            'updated' => $this->updated_at
        ];
    }
}
//order_id	delivery_id	created_at	updated_at
