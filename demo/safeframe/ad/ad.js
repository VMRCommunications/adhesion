if(typeof $sf !== 'undefined'){
  var g = $sf.ext.geom();
  document.body.style.backgroundColor = '#00FF99';
  var div = document.createElement('div');
  div.setAttribute('id', 'target');
  document.body.appendChild(div);
  var script = document.createElement('script')
  script.type = 'text/javascript';
  script.src = 'http://localhost:3000/index.compiled.js';
  script.onload = function(){
    window.Adhesion('target');
  }
  document.body.appendChild(script);
}
