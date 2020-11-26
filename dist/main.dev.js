"use strict";

var _translateText = _interopRequireDefault(require("./assets/scripts/translateText.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// set up listeners TEXT from box ON PAGE
var inputText = document.querySelector('.input__text');
var inputButton = document.querySelector('.input__button');
var displayResults = document.querySelector('.display__results');
var refreshButton = document.querySelector('.input__refresh');
inputButton.addEventListener('click', function (event) {
  var inputString = inputText.value;
  displayResults.innerHTML = "".concat((0, _translateText["default"])(inputString));
});
refreshButton.addEventListener('click', function (event) {
  location.reload();
});