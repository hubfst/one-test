<?php
header('Content-Type:application/json;charset=utf-8');

require('init.php');

@$un=$_REQUEST['name'] or die('name required');
@$up=$_REQUEST['pwd'] or die('pwd required');

$sql="SELECT * FROM fash_user WHERE uname='$un' AND upwd='$up'";
$result=mysqli_query($cnn,$sql);
$row=mysqli_fetch_assoc($result);
//var_dump($row);
if($row===null){
$str=['code'=>2,'msg'=>'用户名或密码错误'];
}else{
$uid=$row['uid'];
$str=['code'=>1,'uname'=>$un,'uid'=>$uid];
}
echo json_encode($str);
?>