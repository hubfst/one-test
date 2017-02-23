<?php
header('Content-Type:application/json;charset=utf-8');

@$uid=$_REQUEST['uid'] or die ('uid required');
require('init.php');

$output=[];

$sql="SELECT username,addr1,addr2,youbian,phone FROM user_addr WHERE userid='$uid' ";
$result=mysqli_query($cnn,$sql);

$arr = array();
while ($row = mysqli_fetch_assoc($result))
{
$arr[] = $row;
}


if($arr!=null){
   foreach($arr as $addr){
       $output[]=[
		    "code"=>1,
		    "uname"=>"$addr[username]",
		    "addr1"=>"$addr[addr1]",
		    "addr2"=>"$addr[addr2]",
		    "youbian"=>"$addr[youbian]",
		    "phone"=>"$addr[phone]"
	   ];
   }
   
}else{
   $output[]=["code"=>2,"msg"=>'用户地址不存在'];
   }

echo json_encode($output);





?>