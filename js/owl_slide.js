var pages = []; // スライド情報を突っ込む
var str   = [];

var page_body = $('.page-body').children();

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

/* slide一覧を生成 */
$('body').append('<div class="slider"></div>');
var slides = $('.slider');

/* pagesを追加 */
for(var i=0;i<pages.length;i++) {
  for(var j=0;j<pages[i].length;j++) {
    slides.append(pages[i][j][1]);
  }
}

/* slider setup */
$(function() {
  $('.slider').slider({
    showControls: true,
    autoplay: false,
    showPosition: true;
    hoverPause: true,
    direction: 'left'
  });
});
