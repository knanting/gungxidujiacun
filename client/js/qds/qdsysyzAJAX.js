$(function () {
  $.ajax({
    url: 'http://localhost:3000/getData',
    method: 'get',
    data:{
        type: '云舍驿站',
        class: '*',
       
    },
    success: function (data){
       
        var pddsss = localStorage.getItem('id')   
        // console.log(typeof pddsss)
          var  html=""
          var  htmla=''
         
          
        data.data.forEach(item => {
            // console.log(item)
            // console.log(item.id)
            if(item.id === parseInt(pddsss)){
              console.log(item)
              var apps = eval('(' + item.imgsrc + ')')
              console.log()
              htmla =`<img src="${apps[0]}" alt="">`
              
              apps.forEach(items =>{
                  
                  html+= `<img src="${items}" alt="">`
              })
            }
            console.log(htmla)
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