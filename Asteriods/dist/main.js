/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(options) {\n  MovingObject.call(this, options);\n  this.color = \"#404040\";\n  this.radius = 20;\n  this.vel = Util.randomVec(2);\n}\n\n\n\n\n\n\n\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\nfunction Game () {\n\n  this.DIM_X = 800; \n  this.DIM_Y = 800; \n  this.NUM_ASTEROIDS = 20; \n  this.asteroids = [];\n\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(this.addAsteroids() );\n  }\n}\n\n\nGame.prototype.addAsteroids = function() {\n  return new Asteroid( \n    { pos : [Math.random() * 800, Math.random() * 800], game: this }\n  );\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, 800, 800);\n  this.asteroids.forEach(function (el) {\n    el.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function() {\n  this.asteroids.forEach ( function(el) {\n    el.move();\n  });\n};\n\nGame.prototype.wrap = function(pos) {\n  \n  let newPos = pos;\n  \n  if (pos[0] < 1) newPos = [799, 800 - pos[1]];\n  if (pos[0] > 799) newPos = [1, 800 - pos[1]];\n  if (pos[1] < 1) newPos = [800 - pos[0], 799];\n  if (pos[1] > 799) newPos = [800 - pos[0], 1];\n  return newPos;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  const that = this;\n\n  setInterval(function() { \n\n    that.game.moveObjects();\n    that.game.draw(that.ctx);\n  }, 16.67);  \n};\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moving_object_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_util_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_asteroid_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_game_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_view_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n  // const mo = new MovingObject(\n  //   { pos: [250, 250], vel: [10, 10], radius: 10, color: \"#F23123\" }\n  // );\n  // mo.draw(ctx);\n\n  const newGame = new _game_view_js__WEBPACK_IMPORTED_MODULE_4___default.a(ctx);\n  newGame.start();\n\n  const game11 = new _game_js__WEBPACK_IMPORTED_MODULE_3___default.a();\n\n\n  const ast = new _asteroid_js__WEBPACK_IMPORTED_MODULE_2___default.a(\n    { pos: [250, 250], game: game11}\n  );\n  console.log(ast);\n  \n});\n\n\n\nwindow.MovingObject = _moving_object_js__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  \n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n  this.pos = this.game.wrap(this.pos);\n  \n};\n\n\n\n\n\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function surrogate () {}\n    surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });