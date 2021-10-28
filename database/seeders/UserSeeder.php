<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        $password = Hash::make('admin@123');
        $statement = "INSERT INTO users (id, name, email, password) VALUES
            (1, 'Admin Admin','admin@admin.com', '$password'),
            (2, 'Admin Nairobi','nairobi@admin.com', '$password'),
            (3, 'Admin Mombasa','mombasa@admin.com', '$password');";
        DB::unprepared($statement);
    }
}
