/**
 * Created by bjwsl-001 on 2016/12/18.
 */
/*菜单显示与隐藏*/
$(".aside_menu #out_ul").on("mouseover","li",function(){
    $(this).children(".center_menu").css("display","block");
});
$(".aside_menu #out_ul").on("mouseleave","li",function(){
    $(this).children(".center_menu").css("display","none");
});
/*顶部导航hover显示下拉菜单*/
$("#fix_nav").on("mouseover","li",function(){
    $(this).children(".aside_menu_fixed").css("display","block");
});
$("#fix_nav").on("mouseleave","li",function(){
    $(this).children(".aside_menu_fixed").css("display","none");
});
/*顶部导航显示与隐藏*/
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#fix_nav").css("display","block");
        }
        else {
            $("#fix_nav").css("display","none");
        }
    });
    /*楼层aside显示与隐藏*/
    $(window).scroll(function () {
        //console.log($(window).scrollTop());
        if($(window).scrollTop() > 850&&$(window).scrollTop()<2100){
            $("#aside_floor").fadeIn(500);
        }
        else{
            $("#aside_floor").fadeOut(100);
        }
    });
    /*滚动到区域楼层灯亮*/
    $(window).scroll(function () {
        var out_div=$("#aside_floor");
        var scroll=$(window).scrollTop();
        if(scroll>850&&scroll<1190){
            out_div.children(".floor_active").removeClass("floor_active");
            out_div.children("[data_search='0']").addClass("floor_active");
        }
        else if(scroll>1190&&scroll<1530){
            out_div.children(".floor_active").removeClass("floor_active");
            out_div.children("[data_search='1']").addClass("floor_active");
        }
        else if(scroll>1530&&scroll<1870){
            out_div.children(".floor_active").removeClass("floor_active");
            out_div.children("[data_search='2']").addClass("floor_active");
        }
    });

    /*楼层定位滚动到一定区域*/
    $("#aside_floor").on("click","div.every_style",function(){
        var ds=$(this).attr("data_search");
        switch (ds){
            case "0":
                $('body,html').animate({scrollTop:1050},800);
                break;
            case "1":
                $('body,html').animate({scrollTop:1390},800);
                break;
            case "2":
                $('body,html').animate({scrollTop:1730},800);
                break;
        }
    });
});
/*读取用户名*/
$(document).ready(function(){
    if(sessionStorage['uname']!=null){
            //console.log(sessionStorage['uname']);
           $(".header_l span").html("欢迎回来!"+sessionStorage['uname']);
           $("#login").remove();
           $("#register").remove();
           $(".user_show").css("display","block");
           $(".banner_show").css("display","block");
           $("#u_name").html(sessionStorage['uname']);
    }
});
/*绑定登录*/
$("#login").click(function(){
    location.href="login.html";
});
/*绑定注册事件*/
$(".header").on("click","li#register",function(){
    location.href="register.html";
});
/*绑定我的购物车跳转：若已登录，跳转到购物车页面，否则，跳转到登录页面*/
$(".header_r").on("click","li#mycart",function(){
    if(sessionStorage['uname']!=null){
        location.href="shoping_cart.html";
    }else{
        location.href="login.html";
    }
});
/*绑定我的订单跳转：若已登录，跳转到订单页面，否则，跳转到登录页面*/
$(".header_r").on("click","li#myOrder",function(){
    console.log("dd");
    if(sessionStorage['uname']!=null){
        location.href="user_center.html";
    }else{
        location.href="login.html";
    }
});
/*点击菜单栏不同类别进入不同类别的products页面*/
/*点击上衣栏*/
/*点击菜单栏不同的商品类别，获取该类别的名字，保存到会话存储中，跳转到对应商品页*/
$(document).ready(function(){
   $("#out_ul>li").on("click",'span',function(){
       var psort=$(this).html();
       sessionStorage['psort']=psort;
       location.href="products.html";
   })
});

//侧边图片鼠标移入动画
$(".gosee").hover(function(){
       $(this).animate({bottom:13},'slow');
},function(){
    $(this).animate({bottom:10},'slow');
});
//退出登录
$(".logout").click(function(){
    sessionStorage.removeItem('uname');
    location.reload();
});
//跳转到会员中心
$(".user_center").click(function(){
    location.href="user_center.html";
});































