<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleStage extends Model
{
    use HasFactory;

    protected $fillable = ['vehicle_id', 'stage_id',	'order_id',	'depot_id'];

    public function vehicle() {
        return $this->belongsTo( Vehicle::class );
    }

    public function stage() {
        return $this->belongsTo( Stage::class );
    }

    public function order() {
        return $this->belongsTo( Order::class );
    }

    public function depot() {
        return $this->belongsTo( Depot::class );
    }

}
