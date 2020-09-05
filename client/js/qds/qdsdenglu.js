$(function(){
    // 页面加载完成时先获取cookie的值
    var usernames =  $.cookie('username')
    // $('.apps').attr('value',usernames)
    $('.apps').val(usernames) 
    
$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/users/doLogin',
        method: 'post',
        data:{
            username: $('#accound').val(),
            password: $('#psw').val()
        },
        success:function(res) {
            console.log(res)
            if(res.code === 0){
               $('.codea').css({
                display: "block"
               })
            }else if(res.code === 1){
                window.location.href = "./";
                // console.log('登陆成功')
                // 用cookie 存储账号名
                $.cookie('username',$('.apps').val())
                
            }
        }
    })


})
 $('.qdss').on('click',function(){
    window.location.href = "./zhuc";
 })
 


})