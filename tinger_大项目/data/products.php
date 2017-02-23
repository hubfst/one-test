<?php
header('Content-Type:application/json');

require('init.php');

$p_sort=$_REQUEST['psort'];

$sql="SELECT * FROM fash_product WHERE psort='$p_sort' ";
$result=mysqli_query($cnn,$sql);

$arr = array();
while ($row = mysqli_fetch_assoc($result))
{
$arr[] = $row;
}

echo json_encode($arr);

