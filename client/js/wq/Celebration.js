$(function () {
    $.ajax({
        url: 'http://localhost:3000/getData',
        methods: 'get',
        data: {
            type: '活动庆典',
            class: '*'
        },
        success: (data) => {
            // 数字变化的
            var j = 1;
            // 样式下标
            var a = 0;

            // 添加尾页
            $('.Celebration-Plist').eq(2).text(Math.ceil((data.data.length) / 6))

            var html = ''

            // 初始页面添加图片
            for (var i = 0; i < ($('.Celebration-Plist').eq(0).text() * 6); i++) {
                var src = eval('(' + data.data[i].imgsrc + ')')

                html += `
                    <div class="Celebration-CCont">
                    <h2 class="Celebration-CCTitle">${data.data[i].type}</h2>
                    <img class="Celebration-CCTPic" src='${src}' data-id='${data.data[i].id}'>
                    </div>
                    `
                $('.Celebration-wrap').html(html)
            }

            // 分页数字点击事件
            $('.Celebration-content').on('click', '.Celebration-Plist', function () {
                // 回到顶部
                // $('body,html').animate(
                //     {
                //         scrollTop: 700,
                //     }, 300);


                // 获取页码初始值
                var start = ($(this).text() - 1) * 6;
                if ($(this).text() == Math.ceil((data.data.length) / 6)) {

                    var end = data.data.length - 1
                    // 改变中间数字
                    $('.Celebration-Plist').eq(1).text($(this).text() - 1)
                    // 移除省略号样式给0项添加
                    $('.Celebration-POmit').removeClass('Celebration-POhide').eq(1).addClass('Celebration-POhide')
                    // 最后一页添加样式
                    $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq(2).addClass('Celebration-PLcolor')
                    // 添加 下一页 的样式
                    $('.Celebration-PNext').addClass('Celebration-PPRpublic');
                    $('.Celebration-PNext').css('cursor', 'no-drop');
                    // 移除 上一页 样式
                    $('.Celebration-PPrevious').removeClass('Celebration-PPRpublic');
                    $('.Celebration-PPrevious').css('cursor', 'pointer');
                } else if ($(this).text() <= 1) {
                    // 改变中间数字 
                    $('.Celebration-Plist').eq(1).text(parseInt($(this).text()) + 1);
                    // 移除省略号样式给1项添加
                    $('.Celebration-POmit').removeClass('Celebration-POhide').eq(0).addClass('Celebration-POhide')
                    // 第一页添加样式
                    $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq(0).addClass('Celebration-PLcolor')
                    // 添加上一页的样式
                    $('.Celebration-PPrevious').addClass('Celebration-PPRpublic');
                    $('.Celebration-PPrevious').css('cursor', 'no-drop');
                    // 移除下一页样式
                    $('.Celebration-PNext').removeClass('Celebration-PPRpublic');
                    $('.Celebration-PNext').css('cursor', 'pointer');
                    var end = $(this).text() * 6 - 1;
                } else {
                    var end = $(this).text() * 6 - 1;
                }
                j = $(this).text();
                var html1 = '';

                for (var i = start; i <= end; i++) {


                    html1 += `
                    <div class="Celebration-CCont">
                     <h2 class="Celebration-CCTitle">${data.data[i].type}</h2>
                      <img class="Celebration-CCTPic" src='${eval('(' + data.data[i].imgsrc + ')')}' data-id='${data.data[i].id}'>
                      </div>
                     `
                    $('.Celebration-wrap').html(html1)
                    // 添加移除类名
                    $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq($('.Celebration-Plist').index(this)).addClass('Celebration-PLcolor')
                    // 上一页下一页样式设置
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

            // 下一页点击事件

            $('.Celebration-content').on('click', '.Celebration-PNext', function () {
                j++;

                if (j >= 2 && j < Math.ceil((data.data.length) / 6)) {
                    a = 1
                    // 第二个添加样式
                    $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq(1).addClass('Celebration-PLcolor');
                    // 移除上一页的样式
                    $('.Celebration-PPrevious').removeClass('Celebration-PPRpublic');
                    $('.Celebration-PPrevious').css('cursor', 'pointer');

                    if (j > 2 && j < Math.ceil((data.data.length) / 6) - 2) {
                        // 移除省略号样式
                        $('.Celebration-POmit').removeClass('Celebration-POhide')
                    } else if (j == Math.ceil((data.data.length) / 6) - 1) {
                        j = Math.ceil((data.data.length) / 6) - 1
                        $('.Celebration-POmit').eq(1).addClass('Celebration-POhide')
                    }
                    $('.Celebration-Plist').eq(1).text(j)


                } else if (j >= Math.ceil((data.data.length) / 6)) {

                    j = Math.ceil((data.data.length) / 6)
                    // 最后一页添加样式
                    $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq(2).addClass('Celebration-PLcolor')
                    // 添加下一页的样式
                    $('.Celebration-PNext').addClass('Celebration-PPRpublic');
                    $('.Celebration-PNext').css('cursor', 'no-drop');
                    a = 2
                }


                // 开始值 

                var start = ($('.Celebration-Plist').eq(a).text() - 1) * 6;
                if ($('.Celebration-Plist').eq(a).text() == Math.ceil((data.data.length) / 6)) {
                    var end = data.data.length - 1
                } else {
                    var end = ($('.Celebration-Plist').eq(1).text()) * 6 - 1
                }

                var html1 = ''

                for (var i = start; i <= end; i++) {
                    html1 += `
                     <div class="Celebration-CCont">
                      <h2 class="Celebration-CCTitle">${data.data[i].type}</h2>
                       <img class="Celebration-CCTPic" src='${eval('(' + data.data[i].imgsrc + ')')}' data-id='${data.data[i].id}'>
                       </div>
                      `
                    $('.Celebration-wrap').html(html1)
                }

            })


            // 上一页点击事件
            $('.Celebration-content').on('click', '.Celebration-PPrevious', function () {

                j--;


                if (j >= 2 && j < Math.ceil((data.data.length) / 6)) {
                    a = 1
                    // 第二个添加样式
                    $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq(1).addClass('Celebration-PLcolor');
                    // 移除上一页的样式
                    $('.Celebration-PNext').removeClass('Celebration-PPRpublic');
                    $('.Celebration-PNext').css('cursor', 'pointer');
                    if (j > 2 && j < Math.ceil((data.data.length) / 6) - 1) {
                        // 移除省略号样式
                        $('.Celebration-POmit').removeClass('Celebration-POhide')
                    } else if (j == 2) {
                        j = 2
                        $('.Celebration-POmit').eq(0).addClass('Celebration-POhide')
                    }
                    $('.Celebration-Plist').eq(1).text(j)
                } else if (j <= 1) {
                    j = 1
                    // 第一页添加样式
                    $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq(0).addClass('Celebration-PLcolor')
                    // 添加上一页的样式
                    $('.Celebration-PPrevious').addClass('Celebration-PPRpublic');
                    $('.Celebration-PPrevious').css('cursor', 'no-drop');
                    a = 0
                }
                // 开始值 

                var start = ($('.Celebration-Plist').eq(a).text() - 1) * 6;
                if ($('.Celebration-Plist').eq(a).text() == Math.ceil((data.data.length) / 6)) {
                    var end = data.data.length - 1
                } else if (j <= 1) {
                    var end = ($('.Celebration-Plist').eq(0).text()) * 6 - 1
                } else {
                    var end = ($('.Celebration-Plist').eq(1).text()) * 6 - 1
                }

                var html1 = ''

                for (var i = start; i <= end; i++) {
                    html1 += `
                       <div class="Celebration-CCont">
                        <h2 class="Celebration-CCTitle">${data.data[i].type}</h2>
                         <img class="Celebration-CCTPic" src='${eval('(' + data.data[i].imgsrc + ')')}' data-id='${data.data[i].id}'>
                         </div>
                        `
                    $('.Celebration-wrap').html(html1)
                }


            })

            // 图片点击存储数据下一个页面用
            $('.Celebration-content').on('click', '.Celebration-CCont', function () {
                // 获取id值
                var id = $(this).children('.Celebration-CCTPic').attr('data-id');
                // 存到本地web存储
                localStorage.setItem('id', id)
                // 获取活动庆典的id范围跳转至指定的页面
                $.ajax({
                    url: 'http://localhost:3000/getData',
                    methods: 'get',
                    data: {
                        type: '活动庆典',
                        class: '*'
                    },
                    success: (data) => {
                        if (id >= data.data[0].id && id <= data.data[(data.data.length - 1)].id) {
                            // 跳转新页面
                            location.href = "Celebration-a";
                        }

                    }
                })

            })

        }
    })
})