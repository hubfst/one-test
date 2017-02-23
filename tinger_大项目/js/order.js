/**
 * Created by bjwsl-001 on 2017/1/17.
 */
$(document).ready(function(){
    /*获取登录用户名*/
    var user_name=sessionStorage["uname"];
    $(".header_l span").html("欢迎回来！" + user_name);
    $("#login").remove();
    $("#regiest").remove();
    var uid=sessionStorage["uid"];
    //发送ajax请求判断用户是否已有地址
    $.ajax({
        type:'post',
        url:'data/get_user_addr.php',
        data:{"uid":uid},
        success:function(data){
            console.log("用户地址信息请求成功！");
            //console.log(data);
            if(data[0].code===1){
                $(".addressShow").css("display","block");
                $(".addAddress").css("display","none");
                var html="";
                $.each(data,function(index,addrs){
                html+=`
          <div class="address">
                      <p class="name">${addrs.uname}</p>
                      <p class="addR">
                          <span class="addr2">${addrs.addr1}</span><br/>
                          <span class="addr1">${addrs.addr2}</span>
                          <span class="youbian">${addrs.youbian}</span>
                      </p>
                      <p class="phone">${addrs.phone}</p>
                      <p class="edit">编辑</p>
          </div>
                    `;
                    $(".addressShow").html(html);
                })
            }else{
                $(".addAddress").css("display","block");
                $(".addressShow").css("display","none");
                $(".add_address").css("visibility","hidden");
            }
        },
        error:function(){
            console.log("用户地址信息请求失败！")
        }
    });

   //填写地址表单验证
    $("#Emails").blur(function(){
        var value=$(this).val();
        var reg=/\d{6,}/g;
        var msg="";
        if(!value){
             msg="邮编必填!";
        }else if(!reg.test(value)){
             msg="请填写正确的邮编格式!";
        }else{
            msg="";
        }
        $(this).next("span").html(msg);
    });

    $("#names").blur(function(){
        var value=$(this).val();
        var msg="";
        if(!value){
            msg="收件人姓名不能为空!";
        }else{
            msg="";
        }
        $(this).next("span").html(msg);
    });

    $("#phones").blur(function(){
        var value=$(this).val();
        var msg="";
        var reg=/^1[34578]\d{9}$/g;
        if(!value){
            msg="联系方式不能为空!";
        }else if(!reg.test(value)){
            msg="手机号格式错误！";
        }else{
            msg="";
        }
        $(this).next("span").html(msg);
    });

    //给后台发送请求，添加一条地址信息，添加地址区域隐藏，显示地址区域显示
    $("#add_address").on("click",function(e){
        e.preventDefault();
        var addr1=$("#proves").val()+$("#citys").val()+$("#areass").val();
        var addr2=$("#address").val();
        var name=$("#names").val();
        var phone=$("#phones").val();
        var youbian=$("#Emails").val();
        $(".form-group input").val(" ");
        $(".form-group textarea").val(" ");
        $.ajax({
            type:'POST',
            url:'data/add_user_addr.php',
            data:{"uid":uid,"name":name,"addr1":addr1,"addr2":addr2,"youbian":youbian,"phone":phone},
            success:function(data){
                 console.log(data.msg);
                 $(".addAddress").css("display","none");
                 $(".addressShow").css("display","block");
                 $(".add_address").css("visibility","visible");
                $.ajax({
                    type:'post',
                    url:'data/get_user_addr.php',
                    data:{"uid":uid},
                    success:function(data){
                        console.log("用户地址信息请求成功！");
                        console.log(data);
                        if(data.code===1){
                            var html="";
                            $.each(data,function(index,addrs){
                                html+=`
          <div class="address">
                      <p class="name">${addrs.uname}</p>
                      <p class="addR">
                          <span class="addr2">${addrs.addr2}</span><br/>
                          <span class="addr1">${addrs.addr1}</span>
                          <span class="youbian">${addrs.youbian}</span>
                      </p>
                      <p class="phone">${addrs.phone}</p>
                      <p class="edit">编辑</p>
          </div>
                    `;
                                $(".addressShow").html(html);
                            })
                        }
                    },
                    error:function(){
                        console.log("用户地址信息请求失败！")
                    }
                });

            },
            error:function(){
                 console.log("请求失败!");
            }
        })
    });
    //添加地址绑定
    $(".add_address").click(function(){
        $(".addAddress").css("display","block");
    });
    //取消添加绑定
    $("#cancel_add").click(function(e){
        e.preventDefault();
        $(".addAddress").css("display","none");
    });
    //点击/鼠标进入地址改变背景样式
    $(".addressShow").on("click",".address",function(){
        //console.log("dd");
        $(this).addClass("address_click");
        $(this).siblings(".address_click").removeClass("address_click");
        //$(this).siblings("div.address").css("backgroundPosition","center");
    });
});
var app=angular.module("orderApp",["ng"]);
app.controller("orderCtrl",["$scope","$http","$interval",function($scope,$http,$interval){
    //获取用户要下单的商品信息
    $scope.orderList=JSON.parse(sessionStorage["orderlist"]);
    $scope.total_num=sessionStorage["total_num"];
    $scope.total_pay=sessionStorage["total_pay"];
    var uid=sessionStorage["uid"];
    $scope.gopay=function(){
        var sel_p=$(".address.address_click").children("p");
        var user_addr=sel_p.children(".addr1").html()+sel_p.children(".addr2").html();
        var user_name=$(".address.address_click").children("p.name").html();
        var user_phone=$(".address.address_click").children("p.phone").html();
        $http({
            method:'POST',
            url:'data/add_user_order.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param({"order_list":$scope.orderList,"uid":uid,"addr":user_addr,"name":user_name,"phone":user_phone})
        }).success(function(data){
            $scope.orderId=data.orderId;
            $(".alert_modal").fadeIn("slow","linear");
            $scope.meter=10;
            var timer=$interval(function(){
                if($scope.meter<=1){
                    $interval.cancel(timer);
                    location.href="title.html";
                }
                $scope.meter--;
            },1000)
        });
    };
    //console.log($scope.orderList);
}]);
