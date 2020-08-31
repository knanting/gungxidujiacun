$(function () {
    var id = localStorage.getItem('id')
    $.ajax({
        url: "http://localhost:3000/getDetailsById",
        methods: "get",
        data: {
            type: "活动庆典",
            id: `${id}`
        },
        success: (data) => {
            console.log(data.data[0]);
            console.log(eval('(' + data.data[0].imgsrc + ')'))
            // 标题
            $('.CSubpage-sub').text(data.data[0].type)
            // 浏览量
            $('.CSubpage-browse p').text(data.data[0].views)
            // 图片渲染
            $(".CSubpage-frame img").attr('src', `${eval('(' + data.data[0].imgsrc + ')')}`)
            // 上一页下一页
            
        }
    })
})