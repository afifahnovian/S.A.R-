<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePasiensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pasiens', function (Blueprint $table) {
            $table->unsignedSmallInteger('id_pasien')->autoIncrement();
            $table->string('member_id', 20)->unique();
            $table->string('password',300);
            $table->string('nama_pasien', 50)->nullable($value=true);
            $table->string('tempat_lahir', 50)->nullable($value=true);
            $table->date('tanggal_lahir')->nullable($value=true);
            $table->string('telepon',18);
            $table->string('jenis_kelamin',16)->nullable($value=true);
            $table->text('alamat')->nullable($value=true);
            $table->string('golongan_darah',5)->nullable($value=true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pasiens');
    }
}
