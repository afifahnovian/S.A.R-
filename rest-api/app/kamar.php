<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class kamar extends Model
{
    protected $fillable = array('nama_kamar', 'kapasitas', 'biaya', 'jumlah_kapasitas');
}
