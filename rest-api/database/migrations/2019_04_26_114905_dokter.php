<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Dokter extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dokters', function (Blueprint $table) {
            $table->unsignedSmallInteger('id_dokter')->autoIncrement();
            $table->string('nama_dokter',50);
            $table->string('poliklinik',50);
            $table->string('telepon')->nullable($value=true);
            $table->text('alamat')->nullable($value=true);
            $table->date('jadwal_praktik');
            $table->string('waktu');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dokter');
    }
}
