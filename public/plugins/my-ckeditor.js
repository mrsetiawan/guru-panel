// if(typeof window == undefined) return;

CKEDITOR.replace('editorQuizz', {
    extraPlugins: 'mathjax',
    mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
    height: 320
  });

  if (CKEDITOR.env.ie && CKEDITOR.env.version == 8) {
    document.getElementById('ie8-warning').className = 'tip alert';
  }
  console.log(CKEDITOR)