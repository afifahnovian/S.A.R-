<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Antrian extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('antrian', function ($table){
            $table->bigIncrements('no_antrian');
            $table->unsignedsmallinteger('id_pasien');
            $table->string('nama_pasien', 50);
            $table->unsignedsmallinteger('id_dokter');
            $table->string('poliklinik',50);
            $table->foreign('id_pasien')->references('id_pasien')->on('pasiens');
            $table->foreign('id_dokter')->references('id_dokter')->on('dokters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
