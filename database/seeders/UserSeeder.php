<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $users = new User();
        $users->name = "Rogelio";
        $users->email = "rogelio@gmail.com";
        $users->password = bcrypt("abcd123");
        $users->rol_id = 1;
        $users->save();

        $users = new User();
        $users->name = "Victor";
        $users->email = "victor@gmail.com";
        $users->password = bcrypt("abcd123");
        $users->rol_id = 2;
        $users->save();
    }
}
