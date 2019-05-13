<?php
  include 'dbconnect.php';

    $postdata = file_get_contents("php://input");
    $member_id="";
    $password="";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $member_id = $request->member_id;
        $password = $request->password;
    }


    $query_login = mysqli_query($connect, "SELECT * FROM pasiens WHERE member_id = '$member_id' && password = '$password'");

    if(mysqli_num_rows($query_login)){
        $row=mysqli_fetch_assoc($query_login);

              $data =array(
                  'message' => "Login Success",
                  'data' => $row,
                  'status' => "200"
              );
    }

    else{
        $data =array(
                'message' => "Login Failed, Email or Password Wrong",
                'status' => "404"
            );
    }

    echo json_encode($data);
?>