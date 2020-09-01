$(function () {
    var id =  $.cookie('id')
    $.ajax({
        url: 'http://localhost:3000/getData',
        methods: 'get',
        data: {
            type: '活动庆典',
            class: '*'
        },
        success: (data) => {

            // 渲染上一页下一页文字内容
            if (id == data.data[0].id) {
               
                $('.CSubpage-previous').text('无')
                $('.CSubpage-nextZ').text('活动庆典')

            } else if (id == data.data[(data.data.length - 1)].id) {
               
                $('.CSubpage-previous').text('活动庆典')
                $('.CSubpage-nextZ').text('无')
            } else {
               
                $('.CSubpage-previous').text('活动庆典')
                $('.CSubpage-nextZ').text('活动庆典')
            }

            // 通过id相减查找数据
            var difference = parseInt(id - data.data[0].id)
            // 标题
            $('.CSubpage-sub').text(data.data[difference].type)
            // 浏览量
            $('.CSubpage-browse p').text(data.data[difference].views)
            // 图片渲染
            $(".CSubpage-frame img").attr('src', `${eval('(' + data.data[difference].imgsrc + ')')}`)
            // 下一页点击事件
            $('.CSubpage-paging').on('click' , '.CSubpage-nextZ' , function () {
                difference++;
                if(difference >= (data.data.length - 1) ){
                    difference = (data.data.length - 1)
                    $('.CSubpage-previous').text('活动庆典')
                    $('.CSubpage-nextZ').text('无')
                }else{
                    $('.CSubpage-previous').text('活动庆典')
                    $('.CSubpage-nextZ').text('活动庆典')
                }
                // 标题
                $('.CSubpage-sub').text(data.data[difference].type)
                // 浏览量
                $('.CSubpage-browse p').text(data.data[difference].views)
                // 图片渲染
                $(".CSubpage-frame img").attr('src', `${eval('(' + data.data[difference].imgsrc + ')')}`)
                
            })
            // 上一页点击事件
            $('.CSubpage-paging').on('click' , '.CSubpage-previous' , function () {
                difference--;
                if(difference <= 0 ){
                    difference = 0
                    $('.CSubpage-previous').text('无')
                    $('.CSubpage-nextZ').text('活动庆典')
                }else{
                    $('.CSubpage-previous').text('活动庆典')
                    $('.CSubpage-nextZ').text('活动庆典')
                }
                // 标题
                $('.CSubpage-sub').text(data.data[difference].type)
                // 浏览量
                $('.CSubpage-browse p').text(data.data[difference].views)
                // 图片渲染
                $(".CSubpage-frame img").attr('src', `${eval('(' + data.data[difference].imgsrc + ')')}`)
            })
            


        }
    })
})