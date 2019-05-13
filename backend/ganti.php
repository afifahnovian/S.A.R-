<?php
    include 'dbconnect.php';

    $postdata = file_get_contents("php://input");
    
    $member_id = "";
    $telepon = "";
    $alamat = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $member_id = $request->member_id;
        $alamat = $request->alamat;
        $telepon = $request->telepon;

        if($alamat){
            $query_register = mysqli_query($connect,"UPDATE pasiens SET alamat='$alamat' WHERE member_id = '$member_id'");
            
            $query = mysqli_query($connect, "SELECT * FROM pasiens WHERE member_id = '$member_id'");

            if($query){
                $row=mysqli_fetch_assoc($query);
                 $data =array(
                     'message' => "Register Success!",
                     'data'=> $row,
                     'status' => "200"
                 );
            }
        }
        else if($telepon){
            $query_register = mysqli_query($connect,"UPDATE pasiens SET telepon='$telepon' WHERE member_id = '$member_id'");
            
            $query = mysqli_query($connect, "SELECT * FROM pasiens WHERE member_id = '$member_id'");

            if($query){
                $row=mysqli_fetch_assoc($query);
                 $data =array(
                     'message' => "Register Success!",
                     'data'=> $row,
                     'status' => "200"
                 );
            }   
        }

        echo json_encode($data);
    }
?>