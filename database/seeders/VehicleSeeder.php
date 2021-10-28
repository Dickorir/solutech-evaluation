<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('vehicles')->truncate();
        $statement = "INSERT INTO vehicles (id, number_plate, depot_id, stage_id) VALUES
            (1, 'KCC 298K', 1, 1),
            (2, 'KAK 299K', 1, 1),
            (3, 'KCQ 229J', 1, 1),
            (4, 'KBB 902T', 2, 1),
            (5, 'KCD 718R', 2, 1),
            (6, 'KBD 828M', 2, 1);";
        DB::unprepared($statement);
    }
}
