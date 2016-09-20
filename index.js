/**
 * Adhesion module
 * @author Eiji Kuroda
 * @license Apache-2.0
 */
/* globals $sf , __DEVELOP__ */
var Adhesion = function Adhesion(target, headOffset){
  var __ = this;

  /* */
  __.build = function(){
    __.log('build');
    __.currStyle = {};
    __.currStyle.position = __.target.style.position || 'initial';
    __.currStyle.top = __.target.style.top || 'initial';
    __.currStyle.bottom = __.target.style.bottom || 'initial';
    __.currStyle.left = __.target.style.left || 'initial';
    __.currStyle.right = __.target.style.right || 'initial';
    __.currStyle.width = __.target.style.width || 'initial';
    __.currStyle.marginLeft = __.target.style.marginLeft || 'initial';
    __.currStyle.marginRight = __.target.style.marginRight || 'initial';
    __.currStyle.zIndex = __.target.style.zIndex || 'initial';
    __.target.style.position = 'fixed';
    __.target.style.top = __.headOffset + 'px';
    __.target.style.bottom = null;
    __.target.style.left = '50%';
    __.target.style.right = '50%';
    __.target.style.width = '100vw';
    __.target.style.marginLeft = '-50vw';
    __.target.style.marginRight = '-50vw';
    __.target.style.zIndex = 5000000;
  };

  /* */
  __.unbuild = function(){
    __.log('unbuild');
    __.target.style.position = 'relative';
    __.target.style.top = __.currStyle.psotion;
    __.target.style.bottom = __.currStyle.psotion;
    __.target.style.left = __.currStyle.left;
    __.target.style.right = __.currStyle.right;
    __.target.style.width = __.currStyle.width;
    __.target.style.marginLeft = __.currStyle.marginLeft;
    __.target.style.marginRight = __.currStyle.marginRight;
    __.target.style.zIndex = __.currStyle.zIndex;
  };

  /* */
  (function init(){
    if(typeof __DEVELOP__ === 'undefined'){
      __.log = function(msg){return;};
    }else{
      __.log = function(msg){window.console.log(msg);};
    }
    __.target = target;
    __.headOffset = headOffset || 0;
  })();

  return __;
};

module.exports = Adhesion;
