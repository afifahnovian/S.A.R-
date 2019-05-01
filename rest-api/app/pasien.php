<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pasien extends Model
{
    protected $fillable = [
        'member_id','password','nama_pasien','tempat_lahir','tanggal_lahir','telepon','jenis_kelamin','alamat','golongan_darah'
    ];
    // protected $table = 'pasien';
    public $timestamps = false;
    protected $primaryKey = 'id_pasien';
}
