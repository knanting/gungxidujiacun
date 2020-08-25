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
  // $(document).ready(function () {
  //   $(".news-pagenum").on("click", function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //     fun()
  //   });
  // });
//   $('.Celebration-content').on('click', '.Celebration-PPrevious', function () {
//     j--;
//     if (j >= 2 && j < Math.ceil((data.data.length) / 6)) {
//         // 第二个添加样式
//         $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq(1).addClass('Celebration-PLcolor');
//         // 移除上一页的样式
//         $('.Celebration-PPrevious').removeClass('Celebration-PPRpublic');
//         $('.Celebration-PNext').css('cursor', 'pointer');
//     }

// })
