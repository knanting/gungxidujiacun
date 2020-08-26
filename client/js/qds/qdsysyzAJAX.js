$(function () {
  $.ajax({
    url: 'http://localhost:3000/getData',
    method: 'get',
    data:{
        type: '云舍驿站',
        class: '*',
    },
    success: function (data){
      
    }
   })










     // let html = ''
        //  data.data.forEach(item => {
        //      if(item.id === 23){
        //         var apps = eval('(' + item.imgsrc + ')')
        //         apps.forEach(item => {
                    
        //             console.log(item)
        //             html += `
        //             <img src="${item}" alt="">
        //            `
        //         })
        //      }
        //  })
        //  $('.shopping_ba').html(html)


})