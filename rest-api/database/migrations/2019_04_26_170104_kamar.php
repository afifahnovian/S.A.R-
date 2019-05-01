<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Kamar extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kamar', function (Blueprint $table) {
            $table->unsignedSmallInteger('id_kamar')->autoIncrement();
            $table->string('nama_kamar',20);
            $table->integer('kapasitas');
            $table->float('biaya',12,2);
            $table->integer('jumlah_tersisa');
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
