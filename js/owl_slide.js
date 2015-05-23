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
// 記事タイトル、作者を取得
var page_title  = '<div class="s_title">' + $('.item-title').text(); + '</div>';
var page_author = '<div class="s_user">Presented by '  + $('.username').text(); + '</div>';
var title_slide = page_title + page_author;
pages.push([[null, title_slide]]);
// 記事内容を取得
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

console.log(pages); // debug

/* slideスペースを生成 */
$('body').append('<div class="slider"><div class="s_contents"></div></div>');
var slide = $('.s_contents');

/* 1ページ目作成 */
for(var i=0;i<pages[0].length;i++) {
  slide.append(pages[0][i][1]);
}

/*
 * Owl Down
 */

/* Variable */
var slide_num    = 0;            // 現在のスライド番号
var slide_length = pages.length - 1; // スライドの長さ

/* キーイベントに当てる関数 */
var next = function() {
  if(slide_num == slide_length) {
    return;
  } else {
    slide_num++;
  }
  slide.empty(); // 要素削除
  for(var i=0;i<pages[slide_num].length;i++) {
    slide.append(pages[slide_num][i][1]);
  }
}

var prev = function() {
  if(slide_num == 0) {
    return;
  } else {
    slide_num--;
  }
  slide.empty();
  for(var i=0;i<pages[slide_num].length;i++) {
    slide.append(pages[slide_num][i][1]);
  }
}

$(function() {
  /* keyイベント設定 */
  $(window).keydown(function(e) {
    var k = e.keyCode;
    console.log(k);
    if(k == 39) {
      // 右キー
      next();
    } else if (k == 37) {
      // 左キー
      prev();
    }
  });
});
