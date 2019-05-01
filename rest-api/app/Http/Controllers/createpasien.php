<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\pasien;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class createpasien extends Controller
{
    public function index(){
        $pasien = DB::table('pasiens')->select(
            'nama_pasien','tempat_lahir','tanggal_lahir','telepon','jenis_kelamin','alamat','golongan_darah'
            )->get();

        return response()->json($pasien,200);
    }

    public function register(request $request){
        $pasien =  new pasien();
        $pasien->member_id = $request->member_id;
        $pasien->telepon = $request->telepon;
        $pasien->password = bcrypt($request->password);
        $pasien->save();

        return "Kamu berhasil Register";
    }

    public function loginpost(Request $request){

        $member_id = $request->member_id;
        $password = $request->password;

        $data = pasien::where('member_id',$member_id)->first();
        if($data){ //apakah email tersebut ada atau tidak
            if(Hash::check($password,$data->password)){
                $pasien = DB::table('pasiens')->select(
                    'nama_pasien','tempat_lahir','tanggal_lahir','telepon','jenis_kelamin','alamat','golongan_darah'
                    )->where('member_id', $member_id)->first();

                return response()->json($pasien,200);
            }
            else{
                return 'Password atau Member_id, Salah !';
            }
        }
        else{
            return 'Password atau Member_id, Salah!';
        }
    }

    public function update(request $request){
        $id_pasien = $request->id_pasien;
        $pasien = pasien::where('id_pasien',$id_pasien)->first();

        $pasien->nama_pasien = $request->nama_pasien;
        $pasien->tempat_lahir = $request->tempat_lahir;
        $pasien->tanggal_lahir = $request->tanggal_lahir;
        $pasien->jenis_kelamin = $request->jenis_kelamin;
        $pasien->alamat = $request->alamat;
        $pasien->golongan_darah = $request->golongan_darah;
        $pasien->save();

        $data = DB::table('pasiens')->select(
            'nama_pasien','tempat_lahir','tanggal_lahir','telepon','jenis_kelamin','alamat','golongan_darah'
            )->where('id_pasien', $id_pasien)->first();

        return response()->json($data,200);
    }

}
