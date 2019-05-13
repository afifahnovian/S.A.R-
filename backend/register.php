<?php
  include 'dbconnect.php';
    $postdata = file_get_contents("php://input");
    $member_id = "";
    $telepon = "";
    $password = "";
    $confirm = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $member_id = $request->member_id;
        $telepon = $request->telepon;
        $password = $request->password;
        $confirm = $request->confirm;
    
            if($request){
                $query_register = mysqli_query($connect,"INSERT INTO pasiens (member_id, telepon, password) VALUES ('$member_id', '$telepon', '$password')");

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
    }
    echo json_encode($data);
    
?>