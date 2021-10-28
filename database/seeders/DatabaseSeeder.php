<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $this->call(UserSeeder::class);
        $this->call(DepotSeeder::class);
        $this->call(StageSeeder::class);
        $this->call(DeliverySeeder::class);
        $this->call(VehicleSeeder::class);
        $this->call(OrderSeeder::class);
    }
}
