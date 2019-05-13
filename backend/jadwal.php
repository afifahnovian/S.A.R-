<?php
	include 'dbconnect.php';
        
        $jadwal_praktik = mysqli_query($connect, "SELECT CURDATE()");
        $jadwal = mysqli_fetch_assoc($jadwal_praktik);
        $jd = $jadwal['CURDATE()'];
        
	$q = mysqli_query($connect, "SELECT nama_dokter, waktu FROM jadwal_dokters WHERE jadwal_praktik = '$jd'");
        
	while($result = mysqli_fetch_assoc($q)){
		$result_set[]=$result;		
	}

	$data=array(
		'message'=>'Get Jadwal',
        'data' => $result_set,
		'status'=>'200'
	);

	echo json_encode($data);
?>