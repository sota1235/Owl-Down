var pages = []; // スライド情報を突っ込む
var str   = [];

var page_body = $('.page-body').children();

/* 記事情報をparse */
page_body.each(function() {
  var t_name   = $(this).prop("tagName");
  var contents = $(this).get(0).outerHTML;
  if(t_name == "H1") {
    if(str.length == 0) {
      str.push([t_name, contents]);
    } else {
      pages.push(str);
      str = [[t_name, contents]];
    }
  } else {
    if(t_name == "UL") {
      $(this).children().each(function() {
        var t_name   = $(this).prop("tagName");
        var contents = $(this).get(0).outerHTML;
        str.push([t_name, contents]);
      });
    } else {
      str.push([t_name, contents]);
    }
  }
});
pages.push(str);
console.log(pages);

/* slideスペースを生成 */
$('body').append('<div class="slider"><div class="s_contents"></div></div>');
var slide = $('.s_contents');
