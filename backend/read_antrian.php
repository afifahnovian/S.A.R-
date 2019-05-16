<?php
	include 'dbconnect.php';
	$postdata = file_get_contents("php://input");

	$member_id = "";
        
    if (isset($postdata)) {
    	$request = json_decode($postdata);
		$member_id = $request->member_id;
    }

	$bottom = mysqli_query($connect,"SELECT * FROM antrian WHERE member_id = '$member_id'");
	
	$top = mysqli_query($connect, "SELECT * FROM antrian LIMIT 1");

	$top_f = mysqli_fetch_assoc($top);
        $top_res[] = $top_f;
        
	$result_f = mysqli_fetch_assoc($bottom);
        $result_res[] = $result_f;
        
        $sum = $result_f['no_antrian'] - $top_f['no_antrian'];
        
        if($sum != 0){
        	if($bottom){
                $data=array(
                        'message'=>'Get Data Antrian',
                        'data'=>$result_res,
                        'top' =>$top_res,
                        'status'=>'200'
                );
            }
            else{
            	$data=array(
                        'message'=>'Get Data Antrian',
                        'status'=>'400'
                );
            }
        }
        else{
                $data=array(
                        'message'=>'Get Data Antrian',
                        'data'=>$result_res,
                        'top' =>$top_res,
                        'coba' => $sum,
                        'status'=>'403'
                );
        }

	echo json_encode($data);
?>