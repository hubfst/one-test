<?php
header('Content-Type:application/json;charset=utf-8');

@$uid=$_REQUEST['uid'] or die('uid required');
@$pid=$_REQUEST['pid'] or die('pid required');
@$pcolor=$_REQUEST['pcolor'] or die('pcolor required');
@$pscale=$_REQUEST['pscale'] or die('pscale required');
@$count=$_REQUEST['count'] or die('count required');
require('init.php');


//$output=[];

$sql="SELECT cid FROM fash_cart WHERE userid=$uid ";
$result=mysqli_query($cnn,$sql);
$cid=intval(mysqli_fetch_row($result)[0]);

$sql="SELECT * FROM cart_detail WHERE cartid='$cid' AND productId='$pid' AND pcolor='$pcolor' AND pscale='$pscale' ";
$result=mysqli_query($cnn,$sql);
$list=mysqli_fetch_assoc($result);
//var_dump($list);
if($list!=null){
$count=intval($list['count']);
$count++;
$sql="UPDATE cart_detail SET count='$count'  WHERE cartid='$cid' AND productId='$pid' AND pcolor='$pcolor' AND pscale='$pscale' ";
$result=mysqli_query($cnn,$sql);
if($result){
       $output=[
					  'code'=>1,
					  'msg'=>"加入购物车成功!该商品在购物车中的数量为:$count",
                          ];
   }else{
      $output=[
					  'code'=>2,
					  'msg'=>"加入购物车失败!",
                          ];
   }
}
else{
	$sql="INSERT INTO cart_detail VALUES(NULL,'$cid','$pid','$count','$pcolor','$pscale')";
	$result=mysqli_query($cnn,$sql);
		if($result){
			//$output['code']='1';
			//$output['msg']="加入购物车成功!该商品在购物车中的数量为:$count";
				$output=[
					  'code'=>1,
					  'msg'=>"加入购物车成功233!该商品在购物车中的数量为:$count",
                          ];
		 }else{
			      $output=[
					  'code'=>2,
					  'msg'=>"加入购物车失败!233",
                          ];
		 }
}
echo json_encode($output);
