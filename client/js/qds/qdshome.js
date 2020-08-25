  $(function(){
    $(window).scroll (function(){
        var app = document.documentElement.scrollTop || document.body.scrollTop || window.pageXOffset
        // console.log(app)
        if (app > 700 ) {
            $('.zhuye_b').css({
                left : "350px",
                opacity : 1
            })
            $('.zhuye_c').css({
                left : "1047px",
                opacity : 1
            })
            $('.zhuye_d').css({
                left : "1066px",
                opacity : 1
            })
            $('.zhuye_e').css({
                left : "1070px",
                opacity : 1
            })
            
            $('.zhuye_f').css({
                left : "1070px",
                opacity : 1
            })
            $('#view').css({
                left : "1069px",
                opacity : 1
            })

        }
    })
   })
   $(function(){
       $(window).scroll(function(){
           var add=document.documentElement.scrollTop ||document.body.scrollTop||window.pageXOffset
          if(add>1400){
            $('.pursye_a').css({
                top:"45.5px",
                opacity : 1
            })
            $('.pursye_b').css({
                top:"208px",
                opacity : 1
            })
            $('.pursye_c').css({
                top:"517px",
                opacity : 1
            })
            $('.pursye_a').css({
                top:"45.5px",
                opacity : 1
            })
          }
         
        })
   })
   
    
