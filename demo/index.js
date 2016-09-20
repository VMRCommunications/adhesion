/**
 * Interstitial Demo
 * @author Eiji Kuroda
 * @license Apache-2.0
 */

var Adhesion = require('../index.js');

document.addEventListener('DOMContentLoaded', function(){
  var target = document.querySelector('#target');
  var a = new Adhesion(target);
  target.addEventListener('click', function(){
    a.unbuild();
  }, false);
  a.build();
}, false);
