<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('orders')->truncate();
        $statement = "INSERT INTO orders (id, order_no, depot_id, delivery_id, vehicle_id) VALUES
            (1, 'OE-001',1 ,null ,null ),
            (2, 'OE-002',1 ,null ,null ),
            (3, 'OE-003',1 ,null ,null ),
            (4, 'OE-004',1 ,null ,null ),
            (5, 'OE-005',2 ,null ,null ),
            (6, 'OE-006',2 ,null ,null ),
            (7, 'OE-007',2 ,null ,null ),
            (8, 'OE-008',2 ,null ,null );";
        DB::unprepared($statement);
    }
}
