$.ajax({
    url: 'http://localhost:3000/getData',
    type: 'get',
    data: {
        type: '活动庆典',
    },
    success: (data) => {
        $('.Celebration-Plist').eq(2).text(Math.ceil((data.data.length)/6))

        var html = ''

        // 初始页面添加图片
        data.data.forEach((item, index) => {
            console.log(item ,index)

            var src = eval('(' + item.imgsrc + ')')

            html = `
            <div class="Celebration-CCont">
            <h2 class="Celebration-CCTitle">${item.type}</h2>
            <img class="Celebration-CCTPic" src='${src}'>
            </div>
            `

            $('.Celebration-wrap').html(html)
        });



        $('.Celebration-Plist').on('click', function () {

            var start = ($(this).text() - 1) * 6;
            if($(this).text() == Math.ceil((data.data.length)/6)){
                var end = data.data.length-1
            }else{
                var end = $(this).text() * 6 - 1 ;
            }
            console.log(start , end);
            
            var html1='';

            for (var i = start; i <= end; i++) {
               

                html1 += `
                <div class="Celebration-CCont">
                 <h2 class="Celebration-CCTitle">${data.data[i].type}</h2>
                  <img class="Celebration-CCTPic" src='${eval('(' + data.data[i].imgsrc + ')')}'>
                  </div>
                 `

                $('.Celebration-wrap').html(html1)
                // 添加移除类名
                $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq($('.Celebration-Plist').index(this)).addClass('Celebration-PLcolor')
                // 上一页下一页样式shezhi
                if ($('.Celebration-Plist').index(this) == 0) {
                    $('.Celebration-PPrevious').addClass('Celebration-PPRpublic')
                } else if ($('.Celebration-Plist').index(this) == 2) {
                    $('.Celebration-PNext').css('cursor', 'no-drop')
                } else {
                    $('.Celebration-PPrevious').removeClass('Celebration-PPRpublic')
                    $('.Celebration-PNext').css('cursor', 'pointer')
                }
            }

        })

    }
})