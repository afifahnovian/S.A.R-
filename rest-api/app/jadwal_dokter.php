<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class jadwal_dokter extends Model
{
    protected $fillable = [
    	'id','nama_dokter','jadwal_praktik', 'waktu'
    ];
    public $timestamps = false;
    public $incrementing = false;

    public function dokter()
    {
        return $this->belongsTo('App\dokter');
    }
}
