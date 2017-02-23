<?php
header('Content-Type:application/json;charset=utf-8');

@$uid=$_REQUEST['uid'] or die('uid required');
@$pid=$_REQUEST['pid'] or die('pid required');
@$color=$_REQUEST['pcolor'] or die('color required');
@$scale=$_REQUEST['pscale'] or die('scale required');

require('init.php');

$output=[];

$sql="SELECT cid FROM fash_cart WHERE userid='$uid' ";
$result=mysqli_query($cnn,$sql);
$cid=intval(mysqli_fetch_row($result)[0]);

$sql="DELETE FROM cart_detail WHERE cartid='$cid' AND productId='$pid' AND pcolor='$color' AND pscale='$scale' ";
$result=mysqli_query($cnn,$sql);
if($result){
      $output[]=["code"=>1,"msg"=>"该商品删除成功！"];
}else{
	  $output[]=["code"=>2,"msg"=>"删除失败!"];
}

echo json_encode($output);







