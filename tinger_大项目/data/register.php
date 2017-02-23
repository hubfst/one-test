<?php
header('Content-Type:application/json;charset=utf-8');

@$un=$_REQUEST['uname'] or die('name require');
@$upwd=$_REQUEST['pwd'] or die('pwd require');

require('init.php');

$sql="INSERT INTO fash_user VALUES(NULL,'$un','$upwd')";
$result=mysqli_query($cnn,$sql);

if($result){
$str=['code'=>1,'msg'=>'注册成功！'];
$id=mysqli_insert_id($cnn);
$sql="INSERT INTO fash_cart VALUES(NULL,$id)";
mysqli_query($cnn,$sql);
}else{
$str=['code'=>2,'msg'=>'注册失败!'];
};

echo json_encode($str);

?>