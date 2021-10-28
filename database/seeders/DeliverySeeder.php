<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeliverySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('deliveries')->truncate();
        $statement = "INSERT INTO deliveries (id, name) VALUES
            (1, 'Pending'),
            (2, 'Loading'),
            (3, 'Dispatched'),
            (4, 'Delivered');";
        DB::unprepared($statement);
    }
}
