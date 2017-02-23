/**
 * Created by bjwsl-001 on 2016/12/22.
 */

$(document).ready(function(){
    /*获取正登录的用户名*/
    if(sessionStorage["uname"]!=null) {
        var user_name = sessionStorage["uname"];
        //var user_head = sessionStorage["header_pic"];
//        console.log(user_name,user_head);
        $("#login").remove();
        $("#regiest").remove();
    }
    //页面加载后根据前一个页面传入的pid，异步获取商品信息
    var pid=sessionStorage['pid'];
    $.ajax({
        type:'GET',
        url:'data/pinfo.php',
        data:{"pid":pid},
        success:function(data){
            console.log("请求成功！");
            var htmll="";
            var htmlr="";
            $("#product_img img").attr("src",data[0].pimg);
            $.each(data,function(i,m){
                var src=data[i].pimg.toString();
                var color=data[i].pcolor;
                var src_1=src.slice(0,-7);
                var src_2=src.slice(-4);
                var src_=src_1+"small"+src_2;
                htmll+=`<li><img src=${src_}></li>`;
                if(i%2==0){
                    htmlr+=`<li><img src=${src_} title=${color} alt=""></li>`;
                }
            });
            $("#small_list").html(htmll);
            $(".color_img").html(htmlr);
        },
        error:function(){

        }
    });

    //页面加载后异步获取该商品的店铺信息


    //控制商品细节展示部分滑动部分的背景显示与隐藏
    $("#dt_as_content ").on("mouseenter",'li',function(){
        $(this).css("backgroundImage",'url("images3/aside_select_bg.png")')
               .children("i").addClass("select_active");
    });
    $("#dt_as_content ").on("mouseleave",'li',function(){
        $(this).css("backgroundImage",'none')
            .children("i").removeClass("select_active");
    });
    //控制边栏分页的显示与隐藏  与   控制顶部固定边栏的显示与隐藏
    $(window).scroll(function(){
        if($(window).scrollTop()>1000&&$(window).scrollTop()<1227){
            $("#dt_as_content ul").children(":nth-child(1)").css("backgroundImage",'url("images3/aside_select_bg.png")')
                .children("i").addClass("select_active");
        }
        else if($(window).scrollTop()>1227&&$(window).scrollTop()<1347){
            $("#dt_as_content ul").children(":nth-child(2)").css("backgroundImage",'url("images3/aside_select_bg.png")')
                .children("i").addClass("select_active");
        }
        else if($(window).scrollTop()>1347&&$(window).scrollTop()<3381){
            $("#dt_as_content ul").children(":nth-child(3)").css("backgroundImage",'url("images3/aside_select_bg.png")')
                .children("i").addClass("select_active");
        }
        else if($(window).scrollTop()>3381&&$(window).scrollTop()<8127){
            $("#dt_as_content ul").children(":nth-child(4)").css("backgroundImage",'url("images3/aside_select_bg.png")')
                .children("i").addClass("select_active");
        }
        else if($(window).scrollTop()>8127){
            $("#dt_as_content ul").children(":nth-child(5)").css("backgroundImage",'url("images3/aside_select_bg.png")')
                .children("i").addClass("select_active")

        }
        if($(window).scrollTop()>1000&&$(window).scrollTop()<8127){
           $(".detail_aside").addClass("fixed_b");
            $("#detail_show_head").addClass("fixed_a");
            $(".shop_home_aside_info").addClass("fixed_c");
        }else{
            $(".detail_aside").removeClass("fixed_b");
            $("#detail_show_head").removeClass("fixed_a");
            $(".shop_home_aside_info").removeClass("fixed_c");
        }
    });
    //控制鼠标进入小图片，更换其样式，并且改变大图片的src
    $("#small_list").on("mouseenter","img",function(){
            var other_hover=$(this).parent().siblings("li").children(".small_hover");
            if(other_hover){
                other_hover.removeClass('small_hover');
            }
            $(this).addClass('small_hover');
            var src_1=$(this).attr("src").slice(0,-9);
            var src_2=$(this).attr("src").slice(-4);
            var src=src_1+"big"+src_2;
            $("#product_img").children('img').attr("src",src);
    });
    //点击右侧款式栏大图展示相应图片
     $(".colors").on("click","img",function(){
         $(this).addClass("colors_activ");
         $(this).parent().siblings().children(".colors_activ").removeClass("colors_activ")
         var src_1=$(this).attr("src").slice(0,-9);
         var src_2=$(this).attr("src").slice(-4);
         var src=src_1+"big"+src_2;
         $("#product_img").children('img').attr("src",src);
     });

    //选择尺寸大小添加类样式改变
    $(".scale>li").on("click","span",function(){
        $(this).addClass("scale_activ");
        $(this).parent().siblings().children("span.scale_activ").removeClass("scale_activ");
    })
});
//为加入购物车按钮绑定事件，若用户已登录，则执行加入购物车操作，若用户未登录，则弹出登录模态框
$("#btn").on("click",".add_cart",function(e){
    e.preventDefault();
    var count_=$("#counts").val();
    var color=$(".color_img>li").children(".colors_activ").attr("title");
    var scale_=$(".scale>li").children("span.scale_activ").html();
    console.log(color,scale_);
    if(sessionStorage["uname"]!=null) {
          var uid_=sessionStorage["uid"];
          var pid_=sessionStorage["pid"];
          $.ajax({
              type:'GET',
              url:'data/add_product_cart.php',
              data:{'uid':uid_,'pid':pid_,'pcolor':color,'pscale':scale_,'count':count_},
              dataType:'json',
              success:function(data){
                  console.log("加入购物车请求发送成功！");
                  alert(data.msg);
              },
              error:function(data){
                  console.log("加入购物车请求发送失败！");
                  alert(data);
              }
          })
    }else{
       $(this).attr("data-toggle","modal").attr("data-target","#myModal");
    }
});

/*绑定我的购物车跳转：若已登录，跳转到购物车页面，否则，显示登录模态框*/
$(".header_r").on("click","li#mycart",function(){
    if(sessionStorage['uname']!=null){
        location.href="shoping_cart.html";
    }else{
        $(this).attr("data-toggle","modal").attr("data-target","#myModal");
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

function gohome(){
   location.href="title.html";
}
/*放大镜功能*/

var zoom= {
    moved: 0,
    $mask: null,
    MAX: 0,
    MSIZE: 0,
    init: function () {
        this.$large = $("#largeDiv");
        this.$mask = $("#mask");
        this.MSIZE = parseFloat(this.$mask.css("width"));
        this.MAX = parseFloat($("#superMask").css("width") - this.MSIZE);
        $("#superMask")
            .hover(()=>this.showMask())
            .mousemove((e)=>this.maskMove(e));
    },
    showMask: function () {//显示隐藏mask，顺便操作large
        this.$mask.css("display",
            this.$mask.css("display") == "block" ?
                "none" : "block"
        );
        var src = $("#product_img>img").attr("src");
        //console.log(src);
        var src_1=src.slice(0,-7);
        //console.log(src_1);
        var src_2=src.slice(-4);
        this.$large.css("backgroundImage",
            `url(${src_1}lager${src_2})`
        );
        this.$large.css("display",
            this.$mask.css("display")
        );
    },
    maskMove: function (e) {//响应鼠标移动事件
        var y = e.offsetY,
            x = e.offsetX,
            top = y - this.MSIZE / 2,
            left = x - this.MSIZE / 2;
        top = top < 0 ? 0 : top > this.MAX ? this.MAX : top;
        left = left < 0 ? 0 : left > this.MAX ? this.MAX : left;
        //修改$mask的top为y-MSIZE/2,left为x-MSIZE/2
        this.$mask.css({top: top, left: left});
        //修改$large的背景定位
        this.$large.css("backgroundPosition",
            `${-left * 16 / 7}px ${-top * 8 / 7}px`
        )

    }
};
zoom.init();

