import translateText from "./assets/scripts/translateText.js"


// set up listeners TEXT from box ON PAGE
const inputText = document.querySelector('.input__text');
const inputButton = document.querySelector('.input__button');
const displayResults = document.querySelector('.display__results');
const refreshButton = document.querySelector('.input__refresh');

inputButton.addEventListener('click', (event) => {

  const inputString = inputText.value

  displayResults.innerHTML = `${translateText(inputString)}`  
});

refreshButton.addEventListener('click', (event) => {
  location.reload();

});