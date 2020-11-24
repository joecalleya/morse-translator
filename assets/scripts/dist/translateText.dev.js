"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _translate = require("../../data/translate.js");

var inputIsLetters = new RegExp('[0-9a-z\\s]', 'i');
var inputIsMorse = new RegExp('[\.\-\\s]', 'i'); //get translate BY filtering the translate object by letter and then showing the Morse 

var translateText = function translateText(input) {
  // Create in/output object
  var outputArray = [];
  var input_array = [];

  if (input.match(inputIsLetters)) {
    console.log("Letters");
    input_array = input.split(""); // we want  to map over each letter in the input_array and TRANSLATE each one in tern

    input_array.map(function (letter) {
      outputArray.push(_translate.translate.filter(function (item) {
        return item.alpha == letter.toUpperCase();
      })[0].morse);
    });
  } else if (input.match(inputIsMorse)) {
    console.log("Morse");
    input_array = input.split(".......");
    input_array.map(function (letter) {
      outputArray.push(_translate.translate.filter(function (item) {
        return item.morse == letter.toUpperCase();
      })[0].alpha);
    });
  } else {
    outputArray = "Please only use alpha numeric or morse";
  }

  return outputArray.toString();
};

var _default = translateText;
exports["default"] = _default;