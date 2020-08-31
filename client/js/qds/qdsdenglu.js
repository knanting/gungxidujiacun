$(function(){
$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/users/doLogin',
        method: 'post',
        data:{
            username: $('#username').val(),
            password: $('#password').val()
        },
        success:function(res) {
            console.log(res)
        }
    })


})




})