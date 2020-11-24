"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _translate = require("../../data/translate.js");

var translateLetterToMorse = function translateLetterToMorse(letter) {
  var filtered = [];
  var re = new RegExp('[0-9a-z\\s]', 'i'); // if lett is alpha then translate alpha otherwise Translate morse

  if (letter.match(re)) {
    filtered = _translate.translate.filter(function (item) {
      return item.alpha == letter.toUpperCase();
    })[0].morse;
  } else if (letter == "." || letter == "-") {
    filtered = _translate.translate.filter(function (item) {
      return item.morse == letter.toUpperCase();
    })[0].alpha;
  } else {
    alert("Please only use alpha numeric or morse");
  }

  return filtered;
};

var _default = translateLetterToMorse;
exports["default"] = _default;