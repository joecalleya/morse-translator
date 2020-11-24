import translateText from "./translateText"
import { exportAllDeclaration } from "@babel/types";

//valid inputs

it ('should translate a to .-',()=> {
    const testTranslate = translateText("a") 
    expect(testTranslate).toBe(".-")
});
it ('should translate .- to a' ,()=> {
    const testTranslate = translateText(".-") 
    expect(testTranslate).toBe("A")
});
it ('should translate .- to a' ,()=> {
    const testTranslate = translateText(".-") 
    expect(testTranslate).toBe("A")
});