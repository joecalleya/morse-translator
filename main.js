import translateText from "./assets/scripts/translateText.js"

// Create in/output object
let outputArray = [];
let input_array
// define alphanumeric regex
var inputIsLetters = new RegExp('[0-9a-z\\s]', 'i');
var inputIsMorse = new RegExp('[\.\-\\s]', 'i');


// set up listeners TEXT from box ON PAGE
const inputText = document.querySelector('.input__text');
const inputButton = document.querySelector('.input__button');
const displayResults = document.querySelector('.display__results');

inputButton.addEventListener('click', (event) => {

  if (inputText.value.match(inputIsLetters)) 
  {
    input_array = inputText.value.split("");
    // we want  to map over each letter in the input_array and TRANSLATE each one in tern
    input_array.map((letter) => {
                                outputArray.push(translateText("Alpha",letter))
                                })
  }
 else if (inputText.value.match(inputIsMorse)) 
  {
    input_array = inputText.value.split(".......");
    input_array.map((letter) => {
      outputArray.push(translateText("Morse",letter))
      })  }
  else
  {
    alert("Please only use alpha numeric or morse")
  }

    displayResults.innerHTML = `${outputArray}`
  });