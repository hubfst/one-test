/**
 * Created by bjwsl-001 on 2017/1/11.
 */
var app=angular.module("cartApp",['ng'],function(){});
app.controller("cartCtrl",["$scope","$http",function($scope,$http){
    var user_id = sessionStorage["uid"];
    $scope.total_num=0;
    $scope.total_pay=0;
    $http.get("data/get_cart_info.php?uid="+user_id)
        .success(function(data){
            console.log(data);
//                  var list=data;
            $scope.plist=data;
            for(var i=0;i<$scope.plist.length;i++){
                $scope.plist[i]['isCheck']=false;
                var pimgs=$scope.plist[i].pimg;
                $scope.plist[i].pimg=pimgs.replace(/big/g,'small');
                $scope.plist[i].price=Number($scope.plist[i].price);
                $scope.plist[i].pcount=Number( $scope.plist[i].pcount);
            }
            $scope.numCtrl=function(c,index){
                if(c==1){
                    $scope.plist[index].pcount++;
                    if($scope.plist[index].isCheck){
                        $scope.total_num++;
                        $scope.total_pay+= $scope.plist[index].price;
                    }
                }else{
                    if($scope.plist[index].pcount>1){
                        $scope.plist[index].pcount--;
                        if($scope.plist[index].isCheck){
                            $scope.total_num--;
                            $scope.total_pay-= $scope.plist[index].price;
                        }
                    }
                }
            };
        });
    //全选和反选，更新商品数量和总付款
    //$scope.isCheck=false;
    $scope.checkAll=function(){
        angular.forEach($scope.plist,function(value,key){
        value.isCheck=$scope.check;
    });
        if($scope.check){
            $scope.total_num=$scope.plist.length;
            var total_pays=0;
            var total_nums=0;
            for(var i=0;i<$scope.plist.length;i++){
                total_pays+=($scope.plist[i].pcount)*($scope.plist[i].price);
                total_nums+=$scope.plist[i].pcount;
            }
            $scope.total_pay=total_pays;
            $scope.total_num= total_nums;

        }else{
            $scope.total_num=0;
            $scope.total_pay=0;
        }

    };

    $scope.checkOne=function(index){
        if(!$scope.plist[index].isCheck){
            $scope.plist[index].isCheck=true;
                $scope.total_num+= $scope.plist[index].pcount;
                $scope.total_pay += ($scope.plist[index].pcount) * ($scope.plist[index].price);
        }else{
            if($scope.total_num>0) {
                $scope.total_num-=$scope.plist[index].pcount;
                $scope.total_pay-=($scope.plist[index].pcount)*($scope.plist[index].price);
            }
            $scope.plist[index].isCheck=false;

        }
        angular.forEach($scope.plist,function(value,key) {
            if(!value.isCheck){
                $scope.check=false;
            }
        });
    };
    $scope.deletes=function(index){
        var id=$scope.plist[index].pid;
        var color=$scope.plist[index].pcolor;
        var scale=$scope.plist[index].pscale;
        $http({
            method:'POST',
            url:'data/delete_cart_product.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param({"uid":user_id,"pid":id,"pcolor":color,"pscale":scale})
        }).success(function(data){
            if(data[0].code==1){
                alert(data[0].msg);
                index==0&&$(".cart_content tbody").children(`tr:eq(${index})`).remove();
                index!=0 &&$(".cart_content tbody").children(`tr:nth-child(${index})`).remove();
            }

            if($scope.plist[index].isCheck){
                $scope.total_num-=$scope.plist[index].pcount;
                $scope.total_pay-=($scope.plist[index].pcount)*($scope.plist[index].price);
            }

        }).error(function(){
            console.log("请求失败");
        })
    };

    //跳转到订单页面
    $(".goPay").on("click",function(){
            var orderList=[];
        for(var i=0;i<$scope.plist.length;i++){
            var order={};
            if($scope.plist[i].isCheck){
                 var p=$scope.plist[i];
                 order["pid"]=p.pid;
                 order["pimg"]=p.pimg;
                 order["pname"]=p.pname;
                 order["price"]=p.price;
                 order["pscale"]=p.pscale;
                 order["pcolor"]=p.pcolor;
                 order["pnum"]=p.pcount;
                 order["xiaoji"]=p.pcount*p.price;
                 orderList.push(order);
                $http({
                    method:'POST',
                    url:'data/delete_cart_product.php',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param({"uid":user_id,"pid":p.pid,"pcolor":p.pcolor,"pscale":p.pscale})
                }).success(function(){
                    console.log("选中商品已被从购物车删除！");
                })
            }
        }
        console.log(orderList);
        if(orderList[0]){
            orderList=JSON.stringify(orderList);
            sessionStorage["orderlist"]=orderList;
            sessionStorage["total_num"]=$scope.total_num;
            sessionStorage["total_pay"]=$scope.total_pay;
            location.href="Order.html";
        }
    })
}]);
$(document).ready(function(){
    /*获取登录用户名*/
    var user_name=sessionStorage["uname"];
    $("#login").remove();
    $("#regiest").remove();
});

function gohome(){
  location.href="title.html";
}