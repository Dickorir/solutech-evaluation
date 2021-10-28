<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('depots')->truncate();
        $statement = "INSERT INTO depots (id, name) VALUES
            (1, 'Nairobi'),
            (2, 'Mombasa');";
        DB::unprepared($statement);
    }
}
