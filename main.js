// You’re tasked with creating a website that can translate between english and morse code.
// As an extension it should be able to translate both ways.

// Create Alphbet object

// 1. The length of a dot is one unit.
// 2. A dash is three units.
// 3. The space between parts of the same letter is one unit.
// 4. The space between letters is three units.
// 5. The space between words is seven units.

  {alpha:"A",morse:".-"}
   ,{alpha:"B",morse:"-...")
   ,{alpha:"C",morse:"-.-.")
   ,{alpha:"D",morse:"-..")
   ,{alpha:"E",morse:".");
   ,{alpha:"F",morse:"..-.");
    ,{alpha:"G",morse:"--.");
    ,{alpha:"H",morse:"....");
   ,{alpha:"I",morse:"..");
    ,{alpha:"J",morse:".---");
    ,{alpha:"K",morse:"-.-");
    ,{alpha:"L",morse:".---");
    ,{alpha:"M",morse:"--");
    ,{alpha:"N",morse:"-.");
    ,{alpha:"O",morse:"---");
    ,{alpha:"P",morse:".--.");
    ,{alpha:"Q",morse:"--.-");
    ,{alpha:"R",morse:".-.");
    {alpha:"S",morse:"...");
    "T",morse:"-");
    {alpha:"U","..-");
    {alpha:"V","...-");
    {alpha:"W",".--");
    {alpha:"X","-..-");
    {alpha:"Y","-.--");
    {alpha:"Z","--..");
    
    console.log(Translate['Z']);

                        //get Tesxt from box

                        const text = document.querySelector('.input__text');
                        const button = document.querySelector('.input__button');
                        const display = document.querySelector('.display__results');

                        button.addEventListener('click', (event) => {
                                                                        let input_array = text.value.split("");
                                                                        const firstLetter = input_array[0];
                                                                        console.log('CLICKED',firstLetter,typeof(firstLetter));
                                                                        display.innerHTML += `${firstLetter}`

                            });

                            // translate = () => {



  translateToMorse = inputArray => {
    inputArray.map(letter = () => {
                    const result = Translate[letter];
                    console.log(result)
                    return result
                  })};
translateToMorse(['B'])
// 3. listen on thing s

// 4. on click 

//  change to morese

// arrays
// is else
// switch
// objects


// 7. display results. 

// 8. Refesh button - 