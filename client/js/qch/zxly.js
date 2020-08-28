$(function () {
    $(window).scroll(function () {
        var stop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        if (stop > 500) {
            $('.content').css({
                marginRight: '0px'
            })
        }
        if (stop > 400) {
            $('.pic2').css({
                marginLeft: '0px'
            })
        }
    })
    var flagTarea = false;
    var flagTel = false;
    var flagEmail = false;
    $('.content_text').blur(function () {
        fnLy()
    })
    function fnLy() {
        var vals = $('.content_text').val()
        if (vals === '') {
            $('.content_text').next().show()
            flagTarea = false
            return
        } else {
            $('.content_text').next().hide()
            flagTarea = true
        }
    }

    $('.iputext').blur(function () {
        fnTel()
        $('.iputext').css({ border: '1px solid #dc8d99' })
    })
    function fnTel() {
        var vals = $('.iputext').val()
        var tel = /^[0-9]\d{7,}$/
        if (!tel.test(vals)) {
            $('.iputext').next().show()
            flagTel = false
        } else {
            
            $('.iputext').next().hide()
            flagTel = true
            // $('.iputext').css({background:'#e8f0fe'})
        }
    }

    $('.iputext-2').blur(function () {
        fnEmail()
        $('.iputext-2').css({ border: '1px solid #dc8d99' })
    })
    function fnEmail() {
        // 获取邮箱框输入的数据
        var vals = $('.iputext-2').val()
        // 邮箱正则匹配表达式
        var email = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i
        if (email.test(email)) {
            // 如果匹配成功，则隐藏div标签
            $('.iputext-2').next().hide()
            flagEmail = true
        } else {
            // 如果匹配失败，则显示div标签
            $('.iputext-2').next().show()
            flagEmail = false
        }
    }

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        slidesPerView: 4,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })

})
