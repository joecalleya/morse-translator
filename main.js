// You’re tasked with creating a website that can translate between english and morse code.
// As an extension it should be able to translate both ways.

// Create Alphbet object

// 1. The length of a dot is one unit.
// 2. A dash is three units.
// 3. The space between parts of the same letter is one unit.
// 4. The space between letters is three units.
// 5. The space between words is seven units.

class Translate {
    constructor(alphabet, morse){

    this.alphabet = alphabet;
    this.morse = morse;
}
 
  }
const A = new Translate("A",".-");
const B = new Translate("B","-...");
const C = new Translate("C","-.-.");
const D = new Translate("D","-..");
const E = new Translate("E",".");
const F = new Translate("F","..-.");
const G = new Translate("G","--.");
const H = new Translate("H","....");
const I = new Translate("I","..");
const J = new Translate("J",".---");
const K = new Translate("K","-.-");
const L = new Translate("L",".---");
const M = new Translate("M","--");
const N = new Translate("N","-.");
const O = new Translate("O","---");
const P = new Translate("P",".--.");
const Q = new Translate("Q","--.-");
const R = new Translate("R",".-.");
const S = new Translate("S","...");
const T = new Translate("T","-");
const U = new Translate("U","..-");
const V = new Translate("V","...-");
const W = new Translate("W",".--");
const X = new Translate("X","-..-");
const Y = new Translate("Y","-.--");
const Z = new Translate("Z","--..");

console.log(B.morse,A.morse);

//get Tesxt from box

const text = document.querySelector('.input__text').value;
const button = document.querySelector('.input__button');
const display = document.querySelector('.input__button');

button.addEventListener('click', (event) => {
                                                console.log('CLICKED',text);
                                                const number = event.target.value;
                                                display.innerHTML
    });

// 3. listen on thing

// 4. on click 

//  change to morese

// arrays
// is else
// switch
// objects


// 7. display results. 

// 8. Refesh button - 