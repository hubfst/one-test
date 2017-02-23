/**
 * Created by bjwsl-001 on 2016/12/10.
 */
$("#phone").click(function(){
    $(this).css("borderBottom","2px solid #fa6f57");
    $("#weixin").css("borderBottom","none");
    $("#login_weixin").css("display", "none");
    $("#login_form").css("display", "block");
});
$("#weixin").click(function(){
    $(this).css("borderBottom","2px solid #fa6f57");
    $("#phone").css("borderBottom","none");
    $("#login_form").css("display", "none");
    $("#login_weixin").css("display", "block");
});

$("#span1").click(function(){
    $("#login").css("display", "block");
});

$("#logbtn").on("click",function(){
    var un=$("#login_form input[type='text']").val();
    var up=$("#login_form input[type='password']").val();
    $.ajax({
        type:'post',
        url:'data/login.php' ,
        data:{'name':un,'pwd':up},
        success:function(list){
            if(list.code===2){
                $("#warning").html(list.msg);
            }else {
                location.href="title.html";
                sessionStorage["uname"]=list.uname;
                sessionStorage["uid"]=list.uid;
            }
        },
        error:function(){
            alert("响应完成但有错误");
        }

    })
});