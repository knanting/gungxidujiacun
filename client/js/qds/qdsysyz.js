
$(function () {
    $.ajax({
        url: 'http://localhost:3000/getData',
        method: 'get',
        data: {
            type: '云舍驿站',
            class: '*',
        },
        success: function (data) {
            var html = ''
            var htmls
            // 默认渲染的6张图片及文字
            // console.log(data)
            for (var i = 0; i < 6; i++) {
                // 数据库图片
                var apps = eval('(' + data.data[i].imgsrc + ')')
                // 数据库文字
                var hapi = data.data[i].introduce
                console.log(data.data[i].id)
                htmls = `<div>${hapi}</div>`
                html = `<img apps="${data.data[i].id}" src='${apps[0]}'>`
                $('.hppt').eq(i).html(html)
                $('.hppt-v').eq(i).html(htmls)

            }

            // 下一页点击事件
            var index = parseInt($('.pass-in').text());
            $('.pass-b').on('click', function () {

                index++
                if (index > 3) {
                    index = 3
                    $('.pass').eq(index ).addClass('pass-in')
                }
                //   console.log(index)
                var bb = 0
                //  点击123更改背景颜色

                for (var i = 0; i < 3; i++) {
                    $('.pass').eq(i).removeClass('pass-in')
                }
                $('.pass').eq(index - 1).addClass('pass-in')

                // 点击切换图片及文字
                for (var i = 6 * (index - 1); i < 6 * index; i++) {
                    // 动态获取图片
                    var apps = eval('(' + data.data[i].imgsrc + ')')
                    // 动态获取文字
                    var hapi =data.data[i].introduce
                    html = `<img  apps="${data.data[i].id}" src='${apps[0]}'>`
                    htmls = `<div>${hapi}</div>`
                    $('.hppt').eq(bb).html(html)
                    $('.hppt-v').eq(bb).html(htmls)
                    bb++
                }


            })
            // 上一页点击事件
            var index = parseInt($('.pass-in').text());
            $('.pass-a').on('click', function () {
                index--
                if (index === 0) {
                    index = 1
                    $('.pass').eq(index ).addClass('pass-in')
                }
                //   console.log(index)
                var bb = 0
                //  点击123更改背景颜色

                for (var i = 0; i < 3; i++) {
                    $('.pass').eq(i).removeClass('pass-in')
                }
                $('.pass').eq(index - 1).addClass('pass-in')

                // 点击切换图片及文字
                for (var i = 6 * (index - 1); i < 6 * index; i++) {
                    // 动态获取图片
                    var apps = eval('(' + data.data[i].imgsrc + ')')
                    // 动态获取文字
                    // var hapi =data.data[i].introduce
                    html = `<img  apps="${data.data[i].id}" src='${apps[0]}'>`
                    htmls = `<div>${hapi}</div>`
                    $('.hppt').eq(bb).html(html)
                    // $('.hppt-v').eq(bb).html(htmls)
                    bb++
                }


            })

            // 123点击事件
            $('.pass').on('click', function () {
                var ppt = parseInt($(this).text())
                var bb = 0
                //  点击123更改背景颜色
                for (var i = 0; i < 3; i++) {
                    $('.pass').removeClass('pass-in')
                }
                $(this).addClass('pass-in')

                // 点击切换图片及文字
                for (var i = 6 * (ppt - 1); i < 6 * ppt; i++) {
                    // 动态获取图片
                    var apps = eval('(' + data.data[i].imgsrc + ')')

                    // 动态获取文字
                    var hapi = data.data[i].introduce
                    html = `<img  apps="${data.data[i].id}" src='${apps[0]}' ">`
                    htmls = `<div>${hapi}</div>`
                    $('.hppt').eq(bb).html(html)
                    $('.hppt-v').eq(bb).html(htmls)
                    bb++
                }
            })
            // web存储

               $('.hppt').on('click',function(){
                //    console.log(11111111111111)
                //    console.log($(this).children($('.hppt img')).attr("apps"))
                   var appss= $(this).children().attr("apps")
                   console.log(appss)
                   localStorage.setItem('id',appss)
                   window.location.href = "./aaap";
               })
          
        }
        
    })

})
