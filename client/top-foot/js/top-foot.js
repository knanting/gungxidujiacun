$(function() {
    // if(document.cookie)
    if ($.cookie('name')) {
        $('.login i').hide()
        $('.login a').text($.cookie('name'))
        $('.login a').css({
            'cursor': 'pointer',
            'pointer-events': 'none'
        })
        $('.regestor i').attr('class', 'iconfont icon-cuo')
        $('.regestor a').text('退出')
        $('.regestor a').on('click', function() {
            $.removeCookie('name')
        })
    }

    var index = 0

    var setClass = () => {
        $('.head-banner li').eq(index).addClass('active').siblings().removeClass('active')
        $('.head-banner-bar span').eq(index).addClass('current').siblings().removeClass('current')
    }


    var next = () => {
        index++
        if (index > 2) {
            index = 0
        }
        setClass()
    }


    var prev = () => {
        index--
        if (index < 0) {
            index = 2
        }
        setClass()
    }


    var autoPlay = setInterval(() => {
        next()
    }, 5 * 1000)


    $('.head-banner-bar span').on('mouseover', function() {
        index = $(this).index()
        setClass()
    })

    $('.next').on('click', () => {
        next()
    })

    $('.prev').on('click', () => {
        prev()
    })

    $('.head-banner').on('mouseenter', () => {
        clearInterval(autoPlay)
    })

    $('.head-banner').on('mouseleave', () => {
        autoPlay = setInterval(() => {
            next()
        }, 5 * 1000)
    })
})