<?php

use Illuminate\Database\Seeder;

class PasienTableSeeder extends Seeder
{
    // /**
    //  * Run the database seeds.
    //  *
    //  * @return void
    //  */
    public function run()
    {

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 20; $i++) {
            if($i*$i%2 == 0)
                $gender = 'laki-laki';
            else
                $gender = 'perempuan';

            DB::table('pasiens')->insert([
                'member_id' => $faker->numberBetween($min=1000, $max=2000),
    			'password' => $faker->numberBetween($min=1000,$max=9999),
                'nama_pasien' => $faker->name,
                'tempat_lahir' => $faker->name,
                'tanggal_lahir' => $faker->date,
                'telepon' => $faker->e164PhoneNumber,
                'jenis_kelamin' => $gender,
                'alamat' => $faker->address,
                'golongan_darah' => 'O'
            ]);
        }
    }
}
