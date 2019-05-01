<?php

namespace App\Http\Controllers;
use App\dokter;
use DB;
use Illuminate\Http\Request;

class data_dokter extends Controller
{
    //update data dokter
    public function update(request $request){
    	$id_dokter = $request->id_dokter;

    	$data = dokter::where('id_dokter', $id_dokter)->first();

        $data->jadwal_praktik = $request->jadwal_praktik;
        $data->waktu = $request->waktu;
        $data->save();

        return 'berhasil apdet';

    }

    public function index(){
        return dokter::all();
    }
}
