/**
 * Interstitial Demo
 * @author Eiji Kuroda
 * @license Apache-2.0
 */

var Adhesion = require('../index.js');

window.Adhesion = function(targetId){
  var target = document.querySelector('#' + targetId);
  var a = new Adhesion(target);
  target.addEventListener('click', function(){
    a.unbuild();
  }, false);
  a.build(150);
}
document.addEventListener('DOMContentLoaded', function(){
  window.Adhesion('target');
}, false);
