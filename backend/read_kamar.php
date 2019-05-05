<?php
	include 'dbconnect.php';

	$q = mysqli_query($connect,"SELECT * FROM kamar");

	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}

	$data=array(
		'message'=>'Get Data Kamar',
		'data'=>$result_set,
		'status'=>'200'
	);

	echo json_encode($data);
?>