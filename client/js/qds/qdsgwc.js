$(function(){

    var index = 0
    // 点击下一张
    $('.yous').on('click',function(){
       
            if( $('.shopping_ba img').length > 4 && $('.shopping_ba img').length-4 !== index ){
                index++
             $('.shopping_ba').animate({
                 marginLeft:- 136 * index
             })
            }
    })
    // 点击回到上一张
   $('.zuos').on('click',function(){
    if( $('.shopping_ba img').length > 4 && index !== 0){
            index--
            $('.shopping_ba').animate({
                marginLeft:- 136 * index
            })
    }
   })
     // 点击小照片大照片以及放大镜照片同步  
   $('.shopping_ba img').on('click',(e)=>{
      $('.shopping-img').html($(e.target)[0].outerHTML)
      $('.fangda').html($(e.target)[0].outerHTML)
   })
     // 放大镜
     $('.shopping_a').on('mousemove',function(){
         $('.fangda').css({
            display: 'block'
         })
         $('.cover').css({
            display: 'block'
         })
         var e = e || window.event;
         var rect = $('.shopping_a')[0].getBoundingClientRect()
         var x = e.clientX - rect.left - 75;
         var y = e.clientY - rect.top - 50;

         x = x <= 0 ? 0 : x >= 450 ? 450 : x;
         y = y <= 0 ? 0 : y >= 300 ? 300 : y;
         $('.cover').css({
             left: x + 'px',
             top : y + 'px'
         })
         $('.fangda img ').css({
            marginLeft : -1200 / 600 * x  + 'px',
            marginTop : -800 / 400 * y  + 'px'
         })
     })
     $('.shopping_a').on('mouseleave',function(){
        $('.fangda').css({
            display: 'none'
         })
         $('.cover').css({
            display: 'none'
         })
     })
  

})
