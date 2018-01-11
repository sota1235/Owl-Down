Owl Down
====

**Note: owl-down is already merged into owl https://github.com/owl/owl/pull/26**

----

Owl用スライドジェネレータ

### Description

[Owl](https://github.com/fortkle/owl)専用スライドジェネレータです。

それぞれの記事をスライド化します。

### Demo

![スライドデモ](http://i.gyazo.com/4741dbc1bde2fcef427121c991fe0533.png)

### Requirement

- jQuery 1.x

### Usage

以下のスクリプトをブックマークレットとして登録して、Owlの記事ページで使用してください。

```javascript
javascript:window.BASE_URL="https://cdn.rawgit.com/sota1235/Owl-Down/master/";var s=document.createElement("script");s.setAttribute("src",window.BASE_URL+"js/owl_slide.js"),s.setAttribute("type","text/javascript");var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",window.BASE_URL+"css/owl_slide.css"),document.getElementsByTagName("head")[0].appendChild(s),document.getElementsByTagName("head")[0].appendChild(c);
```

→キー：進む

←キー：戻る

## Author

[@sota1235](https://github.com/sota1235)
