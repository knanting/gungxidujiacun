// 省份
var abb = document.querySelector('.abb')
var acc = document.querySelector('.acc')
var add = document.querySelector('.add')

var html = ''
html += `<option value=" ">请选择</option>`
// for in  循环 便利省份信息
for (var sheng in place) {
    html += `<option value=" ">${sheng}</option>`
}
abb.innerHTML = html


// 点击省份获取城市
var qds;
abb.onclick = function () {
    var http = ''
    qds = abb.selectedIndex;
    if (abb.selectedIndex == 0) {
        http += "请选择城市"
    } else {
        for (var i in place[abb.options[qds].text][0]) {
            http += `<option value=" ">${i}</option>`
        }
        acc.innerHTML = http
    }

}

// 点击城市获取县
acc.onclick = function () {
    var lgd = acc.selectedIndex;
    var ctext = this.options[lgd].text;
    var https = ''
    if (acc.selectedIndex == 0) {
        html += '请输入'
    } else {
        for (var i = 0; i < place[abb.options[qds].text][0][ctext].length; i++) {
            for (var a in place[abb.options[qds].text][0][ctext][i]) {
                https += `<option value=" ">${a}</option>`
            }
        }
        add.innerHTML = https
    }
}

$(function () {




    $('form').submit(function (e) {
        e.preventDefault();
        var obj = {
            // 用户名
            username: $('#username').val(),
            // 密码
            password: $('#password').val(),
            // 手机号
            number: $('#number').val(),
            // 企业名称
            company: $('#company').val(),
            // 省
            pro: $('#pro option:selected').text(),
            // 市
            city: $('#city  option:selected').text(),
            // 区
            area: $('#area  option:selected').text()
        }
        $.ajax({
            url: 'http://localhost:3000/users//regestor',
            type: "post",
            data: obj,
            success: function (res,req) {
               
                if(company){
                    if(res.code === 1){
                        $('.appx').css({
                            display: 'block'
                        })
                        setTimeout(function(){
                            window.location.href = "./denglu";
                        },3000)
                    }
                }else{
                    window.location.href = "./denglu";
                }
                
               
               
            }
        })
    })
    $('.shouj').on('blur',function(){
        var patt = /^1[356789]\d{9}$/;
        if (patt.test($('.shouj').val())) {

            $('.hapi').text('')
        } else {
            $('.shouj').val('') 
            $('.hapi').text('请输入正确的手机号')
        }
    })
    $('.yonghu').on('blur',function(){
             if($('.yonghu').val() !=='' && $('.yonghu').val() !== String && $('.yonghu').val().length > 5 ){
                $('.yonghu_a').text('')
             }else{
                $('.yonghu').val('') 
                $('.yonghu_a').text('账号由5位以上数字/字母组成') 
             }
    })
    $('.qiye').on('blur',function(){
        if( $('.qiye').val()==''){
            $('.qiyea').text('请输入企业名称')
        }else{
            $('.qiyea').text('')
        }

    })
    $('.qmima').on('blur',function(){
         if($('.qmima').val() === $('.cmima').val() && $('.qmima').val() !== String){
            $('.mima').text('')
         }else{
            $('.mima').text('账号密码不一致')
            $('.qmima').val('')
            $('.cmima').val('')
         }
    })
    
})