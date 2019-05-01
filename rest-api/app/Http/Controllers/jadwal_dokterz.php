<?php

namespace App\Http\Controllers;
use DB;
use App\jadwal_dokter;
use Illuminate\Http\Request;

class jadwal_dokterz extends Controller
{
    public function masukin(request $request){
        $id = $request->id;
        
        $jadwal =  new jadwal_dokter();
        $data = DB::table('dokters')->select('nama_dokter')->where('id_dokter', $id)->first();
        $jadwal->id = $id;
        $jadwal->nama_dokter = $data->nama_dokter;
        $jadwal->jadwal_praktik = $request->jadwal_praktik;
        $jadwal->waktu = $request->waktu;
        $jadwal->save();
		        
        return "response()->json($jadwal, 200)";
    }

    public function jadwal(request $request){
    	$tanggal = $request->jadwal_praktik;
    	$jadwal_dokter = DB::table('jadwal_dokters')->select('nama_dokter', 'waktu')->where('jadwal_praktik', $tanggal)->get();
        return response()->json($jadwal_dokter,200);
    }
}
