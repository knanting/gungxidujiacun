$(function () {
  // 购物车页面请求
  $.ajax({
    url: 'http://localhost:3000/getData',
    method: 'get',
    data:{
        type: '云舍驿站',
        class: '*',
       
    },
    success: function (data){
      
        var pddsss =  $.cookie('id')  
        // console.log(typeof pddsss)
          var  html=""
          var  htmla=''
          // 获取对应价格渲染
          var haha =$.cookie('jiage')
          $('.shoujia-a').html(haha)

          // 获取到对应房间名字并赋值给
         var accbcc = $.cookie('name')  
         console.log(accbcc)
         $('.taofang').html(accbcc)
         $('.fenlei-a').html(accbcc)
         $('.miaoshu-b').html(accbcc)
         
        data.data.forEach(item => {
            // console.log(item)
            // console.log(item.id)
          

            if(item.id === parseInt(pddsss)){
              // console.log(item)
              var apps = eval('(' + item.imgsrc + ')')
              console.log()
              htmla =`<img src="${apps[0]}" alt="">`
              
              apps.forEach(items =>{
                  
                  html+= `<img src="${items}" alt="">`
              })
            }
            console.log(htmla)
            // 购物车页面同步
           $('.shopping_ba').html(html)
           $('.shopping-img').html(htmla)
           $('.fangda').html(htmla)
           $('.shopping_ba img').on('click',(e)=>{
            $('.shopping-img').html($(e.target)[0].outerHTML)
         $('.fangda').html($(e.target)[0].outerHTML)
      })
         
        });
    }
   })

})