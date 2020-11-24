import {
  translate
} from "../../data/translate.js"

// define alphanumeric and morse regex searches
var inputIsLetters = new RegExp('[0-9a-z\\s]', 'i');
var inputIsMorse = new RegExp('[\.\-\\s]', 'i');

// Create in/output object
let outputArray = [];
var input_array = []

//get translate BY filtering the translate object by letter and then showing the Morse 
const translateText = (input) => {

  if (input.match(inputIsLetters)) {
    console.log("Letters")
    input_array = input.split("");
    // we want  to map over each letter in the input_array and TRANSLATE each one in tern
    input_array.map((letter) => {
      outputArray.push(translate.filter((item) => (item.alpha == letter.toUpperCase()))[0].morse)
    })
  } else if (input.match(inputIsMorse)) {
    console.log("Morse")

    input_array = input.split(".......");
    input_array.map((letter) => {
      outputArray.push(translate.filter((item) => (item.morse == letter.toUpperCase()))[0].alpha)
    })
  } else {
    outputArray = "Please only use alpha numeric or morse"
  }
  return outputArray

}

export default translateText;