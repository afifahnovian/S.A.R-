<?php
	include 'dbconnect.php';
        $postdata = file_get_contents("php://input");
        $nama_dokter="";
        
        if (isset($postdata)) {
        $request = json_decode($postdata);
        $nama_dokter = $request->nama_dokter;
        }

	$q = mysqli_query($connect,"SELECT * FROM dokters WHERE nama_dokter = '$nama_dokter'");

        $result=mysqli_fetch_assoc($q);


	$data=array(
		'message'=>'Get Data dokter',
		'data'=>$result,
		'status'=>'200'
	);

	echo json_encode($data);
?>