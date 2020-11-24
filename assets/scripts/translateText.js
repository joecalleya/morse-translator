import {
  translate
} from "../../data/translate.js"

//get translate BY filtering the translate object by letter and then showing the Morse 
const translateText = (from,letter) => {
  let filtered = []
  // if morse input
  if (from == "Alpha")
  {
  filtered = translate.filter((item) => (item.alpha == letter.toUpperCase()))[0].morse
  }
  else
  {
    filtered = translate.filter((item) => (item.morse == letter.toUpperCase()))[0].alpha
  }
  return filtered;
  }
  export default translateText;