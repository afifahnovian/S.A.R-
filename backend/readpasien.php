<?php
	include 'dbconnect.php';

 	$id=$_GET['pasiens'];

	$q = mysqli_query($connect,"SELECT nama_pasien, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat FROM pasiens WHERE id_pasien = '$id'");

	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}

	$data=array(
		'message'=>'Get Data Health History Success',
		'data'=>$result_set,
		'status'=>'200'
	);

	echo json_encode($data);
?>