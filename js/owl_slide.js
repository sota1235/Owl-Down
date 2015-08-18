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
var pages = []; // Infomation of slide
var str   = [];

var $page_body = $('.page-body').children();

// TODO: Owl組み込みを見越して$(function(){});に内包する
/* Parse Owl Item */
// Get item title and author
var page_title  = '<div class="s_title">' + $('.item-title').text(); + '</div>';
var page_author = '<div class="s_user">Presented by '  + $('.item-manage .username').text(); + '</div>';
var title_slide = page_title + page_author;
pages.push([[null, title_slide]]);
// Get item contents
// TODO: リファクタリング
$page_body.each(function() {
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

console.log(pages); // for debug

/*
 * Owl Down
 */

/* Variable */
var slide_num    = 0;            // Slide number
var slide_length = pages.length - 1; // Length of slides

// Create DOMs for Owl Down
//var init = function() {
  /* Create DOMs showing slides */
  $('body').append('<div class="slider"><div class="s_contents"></div></div>');
  var slide = $('.s_contents');

  /* Create progress bar */
  $('.slider').append('<div class="s_bar"></div>');
  var s_bar = $('.s_bar');

  /* Create first slide */
  for(var i=0;i<pages[0].length;i++) {
    slide.append(pages[0][i][1]);
  }
  s_bar.css('width', Math.floor(slide_num / slide_length * 100) + '%');
//}


/* Functions */
// Show next slide
var next = function() {
  if(slide_num == slide_length) {
    return;
  }
  slide_num++;
  slide.empty(); // Clear slide
  for(var i=0;i<pages[slide_num].length;i++) {
    slide.append(pages[slide_num][i][1]);
  }
}

// Show previous slide
var prev = function() {
  if(slide_num == 0) {
    return;
  }
  slide_num--;
  slide.empty(); // Clear slide
  for(var i=0;i<pages[slide_num].length;i++) {
    slide.append(pages[slide_num][i][1]);
  }
}

// Start Owl Down
var start = function() {
}

// Finish Owl Down
var finish = function() {
}

$(function() {
  /* initial */
  //init();
  start();

  /* Event listeners */
  // Changing slides by direction keys
  $(window).keydown(function(e) {
    var k = e.keyCode;
    console.log(k);
    if(k == 39) {
      // Show next slide when right key pressed
      next();
    } else if (k == 37) {
      // Show previous slide when left key pressed
      prev();
    }
    // Change length of progress bar
    s_bar.css('width', Math.floor(slide_num / slide_length * 100) + '%');
  });

  // Start Owl Down
  // TODO: スタートボタン作成
  $('.slider-start').click(function() {
    start();
  });

  // Finish Owl Down
  // TODO: フィニッシュボタン作成
  $('.slider-finish').click(function() {
    finish();
  });
});
