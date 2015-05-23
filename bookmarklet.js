window.BASE_URL = 'https://cdn.rawgit.com/sota1235/Owl-Down/master/';
/* owl_slide.js */
var s = document.createElement('script');
s.setAttribute('src', window.BASE_URL + 'js/owl_slide.js');
s.setAttribute('type', 'text/javascript');
/* owl_slide.css */
var c = document.createElement('link');
c.setAttribute('rel',  'stylesheet');
c.setAttribute('type', 'text/css');
c.setAttribute('href', window.BASE_URL + 'css/owl_slide.css');
/* set DOMs */
document.getElementsByTagName('head')[0].appendChild(s);
document.getElementsByTagName('head')[0].appendChild(c);
