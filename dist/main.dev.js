"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// You’re tasked with creating a website that can translate between english and morse code.
// As an extension it should be able to translate both ways.
// Create Alphbet object
// 1. The length of a dot is one unit.
// 2. A dash is three units.
// 3. The space between parts of the same letter is one unit.
// 4. The space between letters is three units.
// 5. The space between words is seven units.
var Translate = function Translate(alphabet, morse) {
  _classCallCheck(this, Translate);

  this.alphabet = alphabet;
  this.morse = morse;
};

var A = new Translate("A", ".-");
var B = new Translate("B", "-...");
var C = new Translate("C", "-.-.");
var D = new Translate("D", "-..");
var E = new Translate("E", ".");
var F = new Translate("F", "..-.");
var G = new Translate("G", "--.");
var H = new Translate("H", "....");
var I = new Translate("I", "..");
var J = new Translate("J", ".---");
var K = new Translate("K", "-.-");
var L = new Translate("L", ".---");
var M = new Translate("M", "--");
var N = new Translate("N", "-.");
var O = new Translate("O", "---");
var P = new Translate("P", ".--.");
var Q = new Translate("Q", "--.-");
var R = new Translate("R", ".-.");
var S = new Translate("S", "...");
var T = new Translate("T", "-");
var U = new Translate("U", "..-");
var V = new Translate("V", "...-");
var W = new Translate("W", ".--");
var X = new Translate("X", "-..-");
var Y = new Translate("Y", "-.--");
var Z = new Translate("Z", "--..");
console.log(Translate['Z']); //get Tesxt from box

var text = document.querySelector('.input__text');
var button = document.querySelector('.input__button');
var display = document.querySelector('.display__results');
button.addEventListener('click', function (event) {
  var input_array = text.value.split("");
  var firstLetter = input_array[0];
  console.log('CLICKED', firstLetter, _typeof(firstLetter));
  display.innerHTML += "".concat(firstLetter);
}); // translate = () => {

translateToMorse = function translateToMorse(inputArray) {
  inputArray.map(letter = function (_letter) {
    function letter() {
      return _letter.apply(this, arguments);
    }

    letter.toString = function () {
      return _letter.toString();
    };

    return letter;
  }(function () {
    var result = Translate[letter];
    console.log(result);
    return result;
  }));
};

translateToMorse(['B']); // 3. listen on thing s
// 4. on click 
//  change to morese
// arrays
// is else
// switch
// objects
// 7. display results. 
// 8. Refesh button -