<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\kamar;
class data_kamar extends Controller
{
	public function register(request $request){
        $kamar =  new kamar();
        $kamar->nama_kamar = $request->nama_kamar;
        $kamar->kapasitas = $request->kapasitas;
        $kamar->biaya = $request->biaya;
        $kamar->jumlah_kapasitas = $request->jumlah_kapasitas;
        $kamar->save();

        return "Data Kamar Berhasil Ditambahkan";
    }
    
    public function register(request $request){
        $kamar =  new kamar();
        $kamar->nama_kamar = $request->nama_kamar;
        $kamar->kapasitas = $request->kapasitas;
        $kamar->biaya = $request->biaya;
        $kamar->jumlah_kapasitas = $request->jumlah_kapasitas;
        $kamar->save();

        return "Data Kamar Berhasil Ditambahkan";
    }
}
