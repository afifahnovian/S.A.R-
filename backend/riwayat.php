<?php
  include 'dbconnect.php';

    $postdata = file_get_contents("php://input");
    $member_id= "";
    $poliklinik = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $member_id = $request->member_id;
    }

    $pasien = mysqli_query($connect, "SELECT id_pasien FROM pasiens WHERE member_id = '$member_id'");
    $pasien = mysqli_fetch_assoc($pasien);
    $id_pasien = $pasien['id_pasien'];


    $poliklinik = mysqli_query($connect, "SELECT poliklinik FROM antrian WHERE member_id = '$member_id'");
    $poliklinik = mysqli_fetch_assoc($poliklinik);
    $poliklinik = $poliklinik['poliklinik'];

    $dokter = mysqli_query($connect, "SELECT nama_dokter FROM dokters WHERE poliklinik = '$poliklinik'");
    $dokter = mysqli_fetch_assoc($dokter);
    $nama_dokter = $dokter['nama_dokter'];

    $jadwal_praktik = mysqli_query($connect, "SELECT CURDATE()");
    $jadwal = mysqli_fetch_assoc($jadwal_praktik);
    $jd = $jadwal['CURDATE()'];

    $riwayat = mysqli_query($connect, "INSERT INTO riwayat VALUES ('$id_pasien', '$member_id', '$nama_dokter', '$poliklinik', $jd)");
    $riwayat = mysqli_fetch_assoc($riwayat);

    $hapus = mysqli_query($connect, "DELETE FROM antrian WHERE member_id = '$member_id'");

    $data=array(
        'message'=>'Get riwayat',
        'data' => $riwayat,
        'status'=>'200'
    );

    echo json_encode($data);
?>