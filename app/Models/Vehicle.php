<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = ['number_plate',	'depot_id', 'stage_id'];

    public function depot() {
        return $this->belongsTo( Depot::class );
    }

    public function stage() {
        return $this->belongsTo( Stage::class );
    }
}
