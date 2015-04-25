/*
 * Owl Down
 *
 * Author:
 *  sota1235
 *
 * Description:
 *  Slide Generator for Owl(https://github.com/fortkle/owl)
 */

/*
 * Initialize
 */
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

/*
 * Owl Down
 */

/* Variable */
var slide_num    = 0;            // 現在のスライド番号
var slide_length = pages.length; // スライドの長さ

/* キーイベントに当てる関数 */
var next = function() {
  if(slide_num == slide_length) {
    return;
  } else {
    slide_num++;
  }
  slide.remove(); // 要素削除
  for(var i=0;i<pages[slide_num].length;i++) {
    slides.append(pages[slide_num][i][1]);
  }
}

var prev = function() {
  if(slide_num == 0) {
    return;
  } else {
    slide_num--;
  }
  slide.remove();
  for(var i=0;i<pages[slide_num].length;i++) {
    slides.append(pages[slide_num][i][1]);
  }
}

/* keyイベント設定 */
$(window).keydown(function(e) {
  var k = e.keyCode;
  if(k == 39) {
    // 右キー
    next();
  } else if (k == 37) {
    // 左キー
    prev();
  }
});
