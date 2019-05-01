<?php

use Illuminate\Database\Seeder;

class DokterTableSeeder extends Seeder
{
    // /**
    //  * Run the database seeds.
    //  *
    //  * @return void
    //  */

    public function run()
    {
        $faker = \Faker\Factory::create();
            DB::table('dokters')->insert(
            [
                'nama_dokter' => 'Dr. Susanti',
                'poliklinik' => "Poli Rehabiltasi  Medik",
                'telepon' => '088822312344',
                'alamat' => 'Dramaga Macet',
                'jadwal_praktik' => '2019-12-31',
                'waktu' => '08.00 - 15.00'
            ]);
            DB::table('dokters')->insert(
            [
                'nama_dokter' => 'Fauzi ms',
                'poliklinik' => "Poli Kelamin",
                'telepon' => '088812343432',
                'alamat' => 'Dramaga Macet',
                'jadwal_praktik' => '2019-12-31',
                'waktu' => '10.00 - 15.00'
            ]);
            DB::table('dokters')->insert(
            [
                'nama_dokter' => 'M. Kamil',
                'poliklinik' => "Poli Organ dalam",
                'telepon' => '088823412555',
                'alamat' => 'Dramaga Macet',
                'jadwal_praktik' => '2019-12-31',
                'waktu' => '10.00 - 15.00'
            ]);
            DB::table('dokters')->insert(
            [
                'nama_dokter' => 'Dr. Ir. Pak Osi',
                'poliklinik' => "Poli Anak",
                'telepon' => '088814257777',
                'alamat' => 'Dramaga Macet',
                'jadwal_praktik' => '2019-12-31',
                'waktu' => '08.00 - 12.00'
            ]);
            DB::table('dokters')->insert(
            [
                'nama_dokter' => 'Dr. Susanoo',
                'poliklinik' => "Poli Umum",
                'telepon' => '088997171723',
                'alamat' => 'Dramaga Macet',
                'jadwal_praktik' => '2019-12-31',
                'waktu' => '08.00 - 16.00'
            ]);
            DB::table('dokters')->insert(
            [
                'nama_dokter' => 'Dr. Hashingingslasher',
                'poliklinik' => "Poli Jantung",
                'telepon' => '089971823939',
                'alamat' => 'Dramaga Macet',
                'jadwal_praktik' => '2019-12-31',
                'waktu' => '08.00 - 12.00'
            ]);
    }
}
