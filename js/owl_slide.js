var pages = []; // スライド情報を突っ込む
var str   = [];

var page_body = $('.page-body').children();

page_body.each(function() {
  var t_name   = $(this).prop("tagName");
  var contents = $(this).text().replace(/[\n\r]/g, "");
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
        var contents = $(this).text().replace(/[\n\r]/g, "");
        str.push([t_name, contents]);
      });
    } else {
      str.push([t_name, contents]);
    }
  }
});
pages.push(str);
console.log(pages);
