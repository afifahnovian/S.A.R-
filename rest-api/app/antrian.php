<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class antrian extends Model
{
	protected $fillable = [
        'id_pasien', 'id_dokter','poliklinik'
    ];
    public $timestamps = false;
    protected $primaryKey = 'no_antrian';
}
