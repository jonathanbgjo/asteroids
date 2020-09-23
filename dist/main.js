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

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\n\nconst COLOR = ['blue', 'green', 'yellow', 'purple'];\nconst RADIUS = 50;\n\nfunction random_item(items){\n    return items[Math.floor(Math.random()*items.length)];   \n}\n\n\n\n\nfunction Asteroid (param){\n    MovingObject.call(this, { pos: param[\"pos\"], vel: Util.randomVec(5), color: random_item(COLOR), radius: RADIUS, game: param[\"game\"]});\n}\n\n// Asteroid.prototype = Object.create(MovingObject.prototype);\n// Asteroid.prototype.constructor = Asteroid;\n\nUtil.inherits(Asteroid, MovingObject)\n\nmodule.exports = Asteroid;\n\n\n// https://open.appacademy.io/learn/swe-in-person/javascript/prototypal-inheritance\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DIM_X = 1000;\nconst DIM_Y = 700;\nconst NUM_ASTEROIDS = 10;\n\nfunction Game(){\n    this.asteroids = []\n}\n\nGame.prototype.step = function (){\n\n}\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach(asteroid => asteroid.move())\n}\n\nGame.prototype.checkCollisions = function () {\n    \n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    this.asteroids.forEach(asteroid => asteroid.draw(ctx))\n}\n\nGame.prototype.addAsteroids = function () {\n    this.asteroids.push(new Asteroid({pos:this.randomPosition(), game: this}))\n}\n\nGame.prototype.randomPosition = function (){\n\n    let startPOS = [0,1,2,3]\n    let asteroidStart = random_item(startPOS);\n    \n    if(asteroidStart === 0){\n        return [0,Math.floor(Math.random() * 700)];\n    }\n    if(asteroidStart === 1){\n        return [1000,Math.floor(Math.random() * 700)];\n    }\n    if(asteroidStart === 2){\n        return [Math.floor(Math.random() * 1000), 0];\n    }\n    if(asteroidStart === 3){\n        return [Math.floor(Math.random() * 1000), 700];\n    }\n}\n\nGame.prototype.wrap = function(pos){\n    \n    if(pos[0] > 1050 || pos[0] < -50){\n        if(pos[0] > 1050){\n            pos = [-50, 700 - pos[1]]\n        }\n        if(pos[0] < -50){\n            pos = [1050, 700 - pos[1]]\n        }\n    }\n    if(pos[1] > 750 || pos[1] < -50){\n        if(pos[1] > 750){\n            pos = [1000 - pos[0], -50]\n        }\n        if(pos[1] < -50){\n            pos = [1000 - pos[0], 750]\n        }\n    }\n    return pos\n}\n\nfunction random_item(items){\n    return items[Math.floor(Math.random()*items.length)];   \n}\n\nmodule.exports = Game;\n//Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9\n\n\n// [0, 0-700], [0-1000, 0] [1000, 0-700] [ 0-1000, 700]\n//   https://open.appacademy.io/learn/swe-in-person/javascript/prototypal-inheritance\n\n// // // // // // // // //\n//  __________________  //\n// |                  | //\n// |                  | //\n// |                  | // \n// |__________________| //\n// // // // // // // // // \n//the // is the potential spawn postition of the asteroid\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(canvas, ctx){\n    // let game = new Game()\n    this.game = new Game()\n    this.ctx = ctx\n    this.canvas = canvas\n    // this.ship = new Ship()\n}\n\nGameView.prototype.start = function (){\n    this.game.addAsteroids(this.ctx);\n    this.game.addAsteroids(this.ctx);\n    this.game.addAsteroids(this.ctx);\n    this.game.addAsteroids(this.ctx);\n    let that = this\n    let interval = 20;\n    setInterval(() => {\n        that.game.moveObjects();\n        that.game.draw(that.ctx);\n    }, interval);\n}\n\n\n\nmodule.exports = GameView\n\n//Stores a Game instance.\n// Stores a canvas context to draw the game into.\n// Installs key listeners to move the ship and fire bullets.\n// Installs a timer to call Game.prototype.step.\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n// const Bullet = require(\"./bullet.js\")\n// const Ship  = require(\"./ship.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n// const Asteroid = require(\"./asteroid.js\")\n// const Util = require(\"./util.js\")\nconst GameView= __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    console.log(\"Webpack is working!\")\n \n    const canvasElement = document.getElementById(\"game-canvas\")\n    const ctx = canvasElement.getContext(\"2d\")\n\n\n    window.MovingObject = MovingObject\n    // window.Bullet = Bullet\n    // window.Ship = Ship\n    window.Game = Game\n    window.Asteroid = Asteroid\n    // window.Util = Util\n    window.GameView = GameView\n\n\n    gameview = new GameView(canvasElement, ctx)\n    gameview.start()\n    // GameView.start(canvasElement, ctx)\n    // const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n\n    // mo.draw(ctx);\n\n    // // const asteroid1 = new Asteroid({pos:[30,30]});\n    // // asteroid1.draw(ctx)\n    \n});\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require(\"./game.js\")\n\nfunction MovingObject(param){\n    this.pos = param.pos\n    this.vel = param[\"vel\"]\n    this.radius = param[\"radius\"]\n    this.color = param[\"color\"]\n    this.game = param[\"game\"]\n}\n\nMovingObject.prototype.move = function () {\n    this.pos = this.game.wrap(this.pos);\n    this.pos[0] = this.pos[0] + this.vel[0];\n    this.pos[1] = this.pos[1] + this.vel[1];\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    \n    ctx.beginPath();\n    \n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, (2 * Math.PI) * this.radius)\n\n    ctx.lineWidth = 1;\n    ctx.fillStyle = this.color;\n    ctx.strokeStyle = \"black\";\n    ctx.stroke();\n    ctx.fill();\n\n    //creating a circle with path\n    // var ctx = c.getContext(\"2d\");\n    // debugger\n    // ctx.beginPath(); // necessary to begin drawing this path\n    // canvas.arc(this.pos[0], this.pos[1], this.radius, 0, (2 * Math.PI) * this.radius)\n\n    // (circleCenterX, circleCenterY, radius, startAngle, endAngle, counterclockwise(optional))\n    // ctx.strokeStyle = \"red\"; // optionally sets color of path\n//     ctx.stroke(); // draws path (default color is black)\n//     ctx.closePath(); // optional when drawing a circle\n//     ctx.fillStyle = this.color; // sets color to be filled inside of the path\n//     ctx.fill(); // fills the interior of the circle (does not work without fillStyle being set)\n}\n\nMovingObject.prototype.isCollidedWith = function (otherMovingObject) {\n\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n    \n    randomVec(length) {\n      const deg = 2 * Math.PI * Math.random();\n      return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    \n    scale(vec, m) {\n      return [vec[0] * m, vec[1] * m];\n    }\n  };\n  \nmodule.exports = Util;\n\n\n// Function.prototype.inherits = function (ParentClass) { ... };\n\n\n// // https://appacademy.github.io/curriculum/language_comparison/index.html\n\n\n\n// Util.inherits(asteroid,movingobject)\n\n// Function.prototype.inherits = function (parent, child) { \n\n// };\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });