<?php
header('Content-Type:application/json;charset=utf-8 ');

$pid=$_REQUEST['pid'];
require('init.php');

$sql=" SELECT pimg,pcolor FROM products_big_img WHERE pid=$pid ";
$result=mysqli_query($cnn,$sql);

$arr = array();
while ($row = mysqli_fetch_assoc($result))
{
$arr[] = $row;
}

if($result===false){
	echo '["code":2,"msg":"sql语法错误"]';
}else{
    echo json_encode($arr);
}
?>