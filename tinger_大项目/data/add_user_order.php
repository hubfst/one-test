<?php
header('Content-Type:text/plain');

		$list=$_REQUEST['order_list'];
		$uid=$_REQUEST['uid'];
		$user_addr=$_REQUEST['addr'];
		$user_name=$_REQUEST['name'];
		$user_phone=$_REQUEST['phone'];
		require('init.php');
		$time=time();

        $time=date("Y-m-d h:i:s", $time);

		$sql="INSERT INTO user_order VALUES(NULL,$uid)";
		$result=mysqli_query($cnn,$sql);
		$oid=mysqli_insert_id($cnn);

foreach($list as $o){
        $pid=$o['pid'];
        $pimg=$o['pimg'];
		$pname=$o['pname'];
		$price=$o['price'];
        $pnum=$o['pnum'];
        $sql="INSERT INTO order_detail VALUES(NULL,$oid,$pid,'$pimg','$pname','$price','$pnum','$time','$user_addr','$user_name','$user_phone')";
		$result=mysqli_query($cnn,$sql);
};

$str["code"]=1;
$str["orderId"]=$oid;
echo json_encode($str);








?>