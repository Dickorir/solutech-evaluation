<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderDeliveriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // for history of order deliveries
        Schema::create('order_deliveries', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')->constrained();   // 001
            $table->foreignId('delivery_id')->constrained();   // pending

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
        Schema::dropIfExists('order_deliveries');
    }
}
