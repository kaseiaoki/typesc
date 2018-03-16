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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var qword = ["title"];
var text = [];
var index = 1;
var EventName = /** @class */ (function () {
    function EventName() {
    }
    EventName.LOAD = "load";
    EventName.CLICK = "click";
    EventName.MOUSE_MOVE = "mousemove";
    return EventName;
}());
var webkitSpeechRecognition = window.webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
var rec = document.getElementById('speak');
rec.addEventListener(EventName.CLICK, function () {
    recognition.start();
    console.log("recording");
});
var next = document.getElementById('nextbutton');
next.addEventListener(EventName.CLICK, function () {
    index += 1;
    document.getElementById("question_index").innerHTML = "" + index + "";
    document.getElementById("now_question").innerHTML = qword[index];
});
var doc = document.getElementById('wordbutton');
doc.addEventListener(EventName.CLICK, function () {
    var question = document.getElementById("q_area").value;
    qword.push(question);
    console.log(question);
});
var answer = document.getElementById('cansbutton');
answer.addEventListener(EventName.CLICK, function () {
    var msg = new SpeechSynthesisUtterance();
    msg.text = qword[index];
    msg.lang = 'en-US';
    msg.rate = 0.5;
    speechSynthesis.speak(msg);
});
recognition.lang = 'en-US';
recognition.addEventListener('result', function (event) {
    var text = event.results.item(0).item(0).transcript;
    console.log(text);
    if (text == qword[1]) {
        document.getElementById("result").innerHTML = "<li class='fa fa-circle-o'>Correct</li>";
    }
    else {
        document.getElementById("result").innerHTML = "<li class='fa fa-circle-o'>Correct</li>";
    }
}, false);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map