<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('stages')->truncate();
        $statement = "INSERT INTO stages (id, name) VALUES
            (1, 'Available'),
            (2, 'Loading'),
            (3, 'On Transit');";
        DB::unprepared($statement);
    }
}
