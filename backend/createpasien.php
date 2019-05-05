<?php
    include 'dbconnect.php';

    $postdata = file_get_contents("php://input");

    $member_id = "";
    $nama_pasien = "";
    $tempat_lahir = "";
    $tanggal_lahir = "";
    $telepon = "";
    $jenis_kelamin = "";
    $alamat = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);

        $member_id = $request->member_id;
        $nama_pasien = $request->nama_pasien;
        $tempat_lahir = $request->tempat_lahir;
        $tanggal_lahir = $request->tanggal_lahir;
        $jenis_kelamin = $request->jenis_kelamin;
        $alamat = $request->alamat;

        if($request){
            $query_register = mysqli_query($connect,"UPDATE pasiens SET nama_pasien= '$nama_pasien',tempat_lahir='$tempat_lahir',tanggal_lahir='$tanggal_lahir',jenis_kelamin='$jenis_kelamin',alamat='$alamat' WHERE member_id = '$member_id'");

            if($query_register){
                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404"
                 ); 
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }

        echo json_encode($data);
    }

?>