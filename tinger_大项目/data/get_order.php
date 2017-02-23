<?php
header('Content-Type:application/json;charset=utf-8');

@$uid=$_REQUEST['uid'] or die('uid required');
require('init.php');

$sql="SELECT orderId FROM user_order WHERE userid='$uid' ";
$result=mysqli_query($cnn,$sql);

$arr = array();
while ($row = mysqli_fetch_assoc($result))
{
$arr[] = $row;
}

$order_list=[];
foreach ($arr as $oids) {
   $oid=$oids["orderId"];
   $sql="SELECT * FROM order_detail WHERE orderId='$oid' ";
   $result=mysqli_query($cnn,$sql);
 
   $list =[];
    while ($row = mysqli_fetch_assoc($result))
     {
        $list[] = $row;
      } 
    
   $order_list[]=$list;
};
echo json_encode($order_list);
?>