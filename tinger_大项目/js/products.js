/**
 * Created by bjwsl-001 on 2016/12/10.
 */
/*获取正登录的用户名*/
if(sessionStorage["uname"]!=null) {
    var user_name = sessionStorage["uname"];
    //var user_head = sessionStorage["header_pic"];
//        console.log(user_name,user_head);
    $("#login").remove();
    $("#regiest").remove();
    //$(".header_l img").attr("src", user_head);
}
/*边栏分页器的显示与隐藏*/
$(document).ready(function(){
    $(window).scroll(function () {
        //console.log($(window).scrollTop());
        if($(window).scrollTop() > 700&&$(window).scrollTop()<2000){
            $("#page_aside").fadeIn(500);
        }
        else{
            $("#page_aside").fadeOut(100);
        }
    });
});
/*页面加载时获取选中的商品类别psort，异步请求获取该分类下的商品信息*/
$(document).ready(function(){
    var psort=sessionStorage['psort'];
    $("#tab_head>ul").children(`li:contains(${psort})`).addClass("li_live");
    $("#content_tit").html(psort);
    $.ajax({
        type:'GET',
        url:'data/products.php',
        data:{'psort':psort},
        success:function(data){
            //console.log("商品信息加载成功！");
            //console.log(data);
            var html="";
            $.each(data,function(i,p){
                html+=`<div class='product'>
                 <img src=${p.pic} id=${p.pid}>
                 <div class="descript">
                     <p class="ptit">${p.pname}</p>
                     <p class="price">${p.price}</p>
                     <span class="add_cart">加入购物车</span><i class="glyphicon glyphicon-shopping-cart" style="font-size:12px "></i>
                     <span class="love_num"><i class="glyphicon glyphicon-heart"></i>${p.plovenum}</span>
                 </div>
             </div>`;
            })
            $("#products_shows").html(html);
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log("商品信息加载失败"+errorThrown);
        }
    })
});
$("#tab_head").on("click","li",function(){
    $(this).addClass("li_live");
    $(this).siblings(".li_live").removeClass("li_live");
    var psort=$(this).html();
    $("#content_tit").html(psort);
    $.ajax({
        type:"GET",
        url:'data/products.php',
        data:{'psort':psort},
        success:function(data){
            //console.log("商品信息加载成功！");
            //console.log(data);
            var html="";
            $.each(data,function(i,p){
                html+=`<div class='product'>
                 <img src=${p.pic} id=${p.pid}>
                 <div class="descript">
                     <p class="ptit">${p.pname}</p>
                     <p class="price">${p.price}</p>
                     <span class="add_cart">加入购物车</span><i class="glyphicon glyphicon-shopping-cart" style="font-size:12px "></i>
                     <span class="love_num"><i class="glyphicon glyphicon-heart"></i>${p.plovenum}</span>
                 </div>
             </div>`;
            });
            $("#products_shows").html(html);
        },
        error:function(){
            console.log("商品信息加载失败");
        }

    })
});

/*为每个商品图片绑定单击事件，点击后获取该商品的Pid,保存在会话存储中，页面跳转*/
$("#products_shows").on("click","img",function(){
    var id=$(this).attr("id");
    sessionStorage['pid']=id;
    location.href="produc_detail.html";
});

/*绑定我的购物车跳转：若已登录，跳转到购物车页面，否则，跳转到登录页面*/
$(".header_r").on("click","li#mycart",function(){
    if(sessionStorage['uname']!=null){
        location.href="shoping_cart.html";
    }else{
        location.href="login.html";
    }
});
function gohome(){
  location.href="title.html";
}
/*绑定我的订单跳转：若已登录，跳转到订单页面，否则，跳转到登录页面*/
$(".header_r").on("click","li#myOrder",function(){
    console.log("dd");
    if(sessionStorage['uname']!=null){
        location.href="user_center.html";
    }else{
        location.href="login.html";
    }
});