<?php
	include 'dbconnect.php';

	$postdata = file_get_contents("php://input");

	$member_id = "";
	$poliklinik = "";

	$request = json_decode($postdata);

	$member_id = $request->member_id;
	$poliklinik = $request->poliklinik;

	$antrian = mysqli_query($connect, "SELECT no_antrian FROM antrian ORDER BY no_antrian DESC LIMIT 1");
        
	$pasien = mysqli_query($connect, "SELECT id_pasien, nama_pasien FROM pasiens WHERE member_id = '$member_id'");

	$pasien = mysqli_fetch_assoc($pasien);

	$pasien[] = $pasien;

	$id_pasien = $pasien['id_pasien'];
	$nama_pasien = $pasien['nama_pasien'];

	if(!mysqli_num_rows($antrian)){
        $no_antrian = 1;
		$insert = mysqli_query($connect, "INSERT INTO antrian VALUES ('$no_antrian', '$id_pasien' ,'$nama_pasien', '$poliklinik')");

		$query_login = mysqli_query($connect, "SELECT * FROM antrian WHERE id_pasien = '$id_pasien'");

	    if(mysqli_num_rows($query_login)){
	        $row=mysqli_fetch_assoc($query_login);

	        $data =array(
	            'message' => "Masuk antrian",
                'data' => $row,
	            'status' => "200"
	        );
	    }
	}
        
    else{
    	$no_antrian = mysqli_fetch_assoc($antrian);
    	$no_antrian[] = $no_antrian;
    	$nomor = $no_antrian['no_antrian'];

    	$nomor = $nomor + 1;
    	$insert = mysqli_query($connect, "INSERT INTO antrian VALUES ('$nomor', '$id_pasien' ,'$nama_pasien', '$poliklinik')");

        $query_login = mysqli_query($connect, "SELECT * FROM antrian WHERE id_pasien = '$id_pasien'");

	    if(mysqli_num_rows($query_login)){
	        $row=mysqli_fetch_assoc($query_login);

	        $data =array(
	            'message' => "Masuk antrian",
                    'data' => $row,
	            'status' => "200"
	        );
	    }
    }
	echo json_encode($data);
?>