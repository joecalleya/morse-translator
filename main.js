// You’re tasked with creating a website that can translate between english and morse code.
// As an extension it should be able to translate both ways.

// Create Alphbet object

// 1. The length of a dot is one unit.
// 2. A dash is three units.
// 3. The space between parts of the same letter is one unit.
// 4. The space between letters is three units.
// 5. The space between words is seven units.


translate = [
  {
    alpha: " ",
    morse: "......."
},{
  alpha: "A",
  morse: ".-"
}, {
  alpha: "B",
  morse: "-..."
}, {
  alpha: "C",
  morse: "-.-."
}, {
  alpha: "D",
  morse: "-.."
}, {
  alpha: "E",
  morse: "."
}, {
  alpha: "F",
  morse: "..-."
}, {
  alpha: "G",
  morse: "--."
}, {
  alpha: "H",
  morse: "...."
}, {
  alpha: "I",
  morse: ".."
}, {
  alpha: "J",
  morse: ".---"
}, {
  alpha: "K",
  morse: "-.-"
}, {
  alpha: "L",
  morse: ".---"
}, {
  alpha: "M",
  morse: "--"
}, {
  alpha: "N",
  morse: "-."
}, {
  alpha: "O",
  morse: "---"
}, {
  alpha: "P",
  morse: ".--."
}, {
  alpha: "Q",
  morse: "--.-"
}, {
  alpha: "R",
  morse: ".-."
}, {
  alpha: "S",
  morse: "..."
}, {
  alpha: "T",
  morse: "-"
}, {
  alpha: "U",
  morse: "..-"
}, {
  alpha: "V",
  morse: "...-"
}, {
  alpha: "W",
  morse: ".--"
}, {
  alpha: "X",
  morse: "-..-"
}, {
  alpha: "Y",
  morse: "-.--"
}, {
  alpha: "Z",
  morse: "--.."
}];

//get TRSANSLATE BY filtering the trabslate object by letter and then showing the Morse 

const translateLetterToMorse = (letter) => {
  filtered = translate.filter((item) => (item.alpha == letter.toUpperCase()))
  return filtered[0].morse;
}

//get TEXT from box ON PAGE

const text = document.querySelector('.input__text');
const button = document.querySelector('.input__button');
const display = document.querySelector('.display__results');

button.addEventListener('click', (event) => {
    let outputArray = [];

    let input_array = text.value.split("");
    // we want  to map over each letter in the input_array and trnslate each one in tern
    input_array.map((letter) => {
      console.log(letter)
      outputArray.push(translateLetterToMorse(letter))
    })
    display.innerHTML = `${outputArray}`
  });