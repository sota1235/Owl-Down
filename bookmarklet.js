window.BASE_URL = 'http://sota1235.net/owl_js/';
/* owl_slide.js */
var s = document.createElement('script');
s.setAttribute('src', window.BASE_URL + 'owl_slide.js');
/* jquery slider */
var j = document.createElement('script');
j.setAttribute('src', window.BASE_URL + 'jquery.slider.min.js');
/* set DOMs */
document.getElementsByTagName('head')[0].appendChild(s).appendChild(j);
