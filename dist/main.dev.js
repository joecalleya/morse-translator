"use strict";

var _translateText = _interopRequireDefault(require("./assets/scripts/translateText.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create in/output object
var outputArray = [];
var input_array; // define alphanumeric regex

var inputIsLetters = new RegExp('[0-9a-z\\s]', 'i');
var inputIsMorse = new RegExp('[\.\-\\s]', 'i'); // set up listeners TEXT from box ON PAGE

var inputText = document.querySelector('.input__text');
var inputButton = document.querySelector('.input__button');
var displayResults = document.querySelector('.display__results');
inputButton.addEventListener('click', function (event) {
  if (inputText.value.match(inputIsLetters)) {
    input_array = inputText.value.split(""); // we want  to map over each letter in the input_array and TRANSLATE each one in tern

    input_array.map(function (letter) {
      outputArray.push((0, _translateText["default"])("Alpha", letter));
    });
  } else if (inputText.value.match(inputIsMorse)) {
    input_array = inputText.value.split(".......");
    input_array.map(function (letter) {
      outputArray.push((0, _translateText["default"])("Morse", letter));
    });
  } else {
    alert("Please only use alpha numeric or morse");
  }

  displayResults.innerHTML = "".concat(outputArray);
});