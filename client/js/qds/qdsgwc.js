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
   $('.zuos').on('click',function(){
    if( $('.shopping_ba img').length > 4 && index !== 0){
            index--
            $('.shopping_ba').animate({
                marginLeft:- 136 * index
            })
    }
   })
   $('.shopping_ba img').on('click',function(){
       console.log($(this))

      console.log( $('.shopping_a').html())
   })
})