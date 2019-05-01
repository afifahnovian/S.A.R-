<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class dokter extends Model
{
	public $timestamps = false;
    protected $fillable = [
    	'nama_dokter', 'poliklinik', 'telepon', 'alamat'
    ];
    // public $timestamp = false;
    protected $primaryKey = 'id_dokter';

    public function jadwal_dokter()
    {
        return $this->hasMany('App\jadwal_dokter');
    }
}
