<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicleStagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_stages', function (Blueprint $table) {
            $table->id();

            $table->foreignId('vehicle_id')->nullable()->constrained();  //  plate of car
            $table->foreignId('stage_id')->constrained();   // On Transit
            $table->foreignId('order_id')->constrained();  // 003
            $table->foreignId('depot_id')->comment('destination')
                ->nullable()->constrained();  // nairobi

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicle_stages');
    }
}
