/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Interstitial Demo
	 * @author Eiji Kuroda
	 * @license Apache-2.0
	 */
	
	var Adhesion = __webpack_require__(1);
	
	document.addEventListener('DOMContentLoaded', function(){
	  var target = document.querySelector('#target');
	  var a = new Adhesion(target);
	  target.addEventListener('click', function(){
	    a.unbuild();
	  }, false);
	  a.build();
	}, false);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	    if(false){
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


/***/ }
/******/ ]);
//# sourceMappingURL=index.compiled.js.map