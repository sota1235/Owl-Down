window.BASE_URL = 'http://sota1235.net/owl_js/';
/* owl_slide.js */
var s = document.createElement('script');
s.setAttribute('src', window.BASE_URL + 'owl_slide.js');
/* owl_slide.css */
var c = document.createElement('link');
c.setAttribute('rel',  'stylesheet');
c.setAttribute('type', 'text/css');
c.setAttribute('href', window.BASE_URL + 'owl_slide.css');
/* set DOMs */
document.getElementsByTagName('head')[0].appendChild(s);
document.getElementsByTagName('head')[0].appendChild(c);
