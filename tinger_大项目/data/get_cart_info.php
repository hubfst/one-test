<?php
header('Content-Type:application/json;charset=utf-8');

@$uid=$_REQUEST['uid'] or die('uid required');
require('init.php');

$sql="SELECT cid FROM fash_cart WHERE userid='$uid' ";
$result=mysqli_query($cnn,$sql);
$cid=intval(mysqli_fetch_row($result)[0]);

$sql="SELECT * FROM cart_detail WHERE cartid='$cid' ";
$result=mysqli_query($cnn,$sql);


$arr = array();
while ($row = mysqli_fetch_assoc($result))
{
$arr[] = $row;
}

$product=[];
foreach($arr as $p){
   $pid=$p['productId'];
   $sql="SELECT pname,price FROM fash_product WHERE pid='$pid' ";
   $result=mysqli_query($cnn,$sql);

    $plist = array();
    while ($row = mysqli_fetch_assoc($result))
   {
     $plist[] = $row;
   }
    
   $pname=$plist[0]['pname'];
   $price=$plist[0]['price'];
   
   $pcolor=$p['pcolor'];

   $sql="SELECT pimg FROM products_big_img WHERE pid='$pid' AND pcolor='$pcolor' ";
   $result=mysqli_query($cnn,$sql);
   $pimg=mysqli_fetch_row($result)[0];
   $product[]=[
	   "pid"=>$pid, "pname"=>$pname,
	   "price"=>$price, "pcolor"=>"$p[pcolor]",
	   "pscale"=>"$p[pscale]", "pimg"=>$pimg,
	   "pcount"=>"$p[count]"];
}

echo json_encode($product);
?>