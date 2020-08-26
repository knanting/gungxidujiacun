function fun(){
    $.ajax({
        url: "http://localhost:3000/getData",
        method: "get",
        data: {
          type: "新闻资讯",
          class: "*",
        },
        success: (data) => {
          let html = "";
          let start = ($(".active").text() - 1) * 6;
          let end = $(".active").text() * 6 - 1;
          for (let i = start; i <= end; i++) {
            let imgsrc = eval("(" + data.data[i].imgsrc + ")");
            let src = (html += `<li>
                  <div class="bodr">
                    <div class="pic">
                      <img src="${imgsrc[0]}" alt="" />
                    </div>
                    <a href="" class="txts">
                      <p class="sy">${data.data[i].type}</p>
                      <p class="noeti">${data.data[i].title}</p>
                      <p class="tx"></p>
                      <p class="date">${data.data[i].releasedata.substring(
                        0,
                        10
                      )}</p>
                    </a>
                    <a href="" class="ixmore">
                      <i class="ico"></i>
                    </a>
                  </div>
                  </li>`);    
          }
          $(".inner ul").html(html);
        },
      });
}
fun()
  // 渲染页面
  $(document).ready(function () {
    $(".news-pagenum").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      fun()
    });
  });
  //下一页
  var index=0;
  $(document).ready(function () {
    $(".news-next").on("click", function () {
      index++;
      if(index>3){
        index=0;
      }
      $('.news-pagenum').eq(0).text(1)
      $('.news-pagenum').eq(index).addClass("active").siblings().removeClass("active")
      fun()
    });
  });
  
  var index1=1;
  $(document).ready(function () {
    $(".news-pre").on("click", function () {
      if(index1 = 1){
        $('.news-pre').disabled=true;

        index1--;
        $('.news-pre1').css({cursor :'pointer',background:'#453d3b'})
        if(index1 < 0){
          index1=3;
        }
      }
      $('.news-pagenum').eq(index1).text(1)
      $('.news-pagenum').eq(index1).addClass("active").siblings().removeClass("active")
      fun()
    });
  });
