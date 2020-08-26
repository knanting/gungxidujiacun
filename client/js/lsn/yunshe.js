function fun() {
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
        console.log(data.data[i]);
        let imgsrc = eval("(" + data.data[i].imgsrc + ")");
        // console.log(data.data);
        let src = (html += `<li>
                  <div class="bodr">
                    <div class="pic">
                      <img src="${imgsrc[0]}" alt="">
                    </div>
                    <a href="" class="txts">
                      <p class="sy">${data.data[i].newsclass}</p>
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
$(".news-pagenum").on("click", function () {
  index = $(this).index() - 1
  $(this).addClass("active").siblings().removeClass("active");
  fun()
});
//下一页
var index = 0;
$(".news-next").on("click", function () {
  index++;
  $('.news-pagenum').eq(index).addClass("active").siblings().removeClass("active")
  fun()
  if (index > 3) {
    index = 3
  }
  if (index == 3) {
    $(".news-next").css('cursor', 'no-drop')
  }
});

$(".news-pre").on("click", function () {
  console.log(index);
  index--;
  $('.news-pagenum').eq(index).addClass("active").siblings().removeClass("active")
  fun()
  if (index <= 0) {
    index = 1
  }
  if (index == 0) {
    // console.log(index);
    $(".news-pre1").css('cursor', 'no-drop')
  }

});
