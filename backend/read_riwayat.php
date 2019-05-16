<?php
	include 'dbconnect.php';
	$postdata = file_get_contents("php://input");

    $member_id="";
        
	$q = mysqli_query($connect, "SELECT * FROM riwayat WHERE member_id = '$member_id'");
        
	while($result = mysqli_fetch_assoc($q)){
		$result_set[]=$result;		
	}

	$data=array(
		'message'=>'Get Riwayat',
        'data' => $result_set,
		'status'=>'200'
	);

	echo json_encode($data);
?>