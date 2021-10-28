<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function depot() {
        return $this->hasOne( Depot::class );
    }

    public function vehicle() {
        return $this->hasOne( Vehicle::class );
    }

    public function delivery() {
        return $this->hasOne( Delivery::class );
    }
}

//
//id
//order_no
//depot_id
//vehicle_id
//delivery_id
//created_at
//updated_at
