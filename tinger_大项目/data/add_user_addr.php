<?php
header('Content-Type:application/json;charset=utf-8');

@$uid=$_REQUEST['uid'] or die('uid required');
@$uname=$_REQUEST['name'] or die('name required');
@$addr1=$_REQUEST['addr1'] or die('addr1 required');
@$addr2=$_REQUEST['addr2'] or die('addr2 required');
@$youbian=$_REQUEST['youbian'] or die('youbian required');
@$phone=$_REQUEST['phone'] or die('phone required');

require('init.php');

$sql="INSERT INTO user_addr VALUES (NULL,'$uid','$uname','$addr1','$addr2','$youbian','$phone')";
$result=mysqli_query($cnn,$sql);

if($result){
    $output=["code"=>1,"msg"=>'地址添加成功！'];
}else{
     $output=["code"=>2,"msg"=>'地址添加失败'];
}
  echo json_encode($output);
?>