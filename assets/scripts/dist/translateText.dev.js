"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _translate = require("../../data/translate.js");

var translateText = function translateText(from, letter) {
  var filtered = []; // if morse input

  if (from == "Alpha") {
    filtered = _translate.translate.filter(function (item) {
      return item.alpha == letter.toUpperCase();
    })[0].morse;
  } else {
    filtered = _translate.translate.filter(function (item) {
      return item.morse == letter.toUpperCase();
    })[0].alpha;
  }

  return filtered;
};

var _default = translateText;
exports["default"] = _default;