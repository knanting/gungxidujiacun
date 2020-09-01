$(function(){
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
            }
        }
    })


})




})