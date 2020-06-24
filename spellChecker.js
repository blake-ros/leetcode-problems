// Question:

// Description
// Define a function named spellChecker which takes in two arguments, an array of user typed string words, and an array of correctly spelled string words.The function will return two arrays.One array will contain words that are spelled correctly, and another which contains the words which were spelled incorrectly

// Syntax
// spellChecker(userWords, correctWords)
// Parameters
// userWords - an array of words in string format
// correctWords - an array of words in string format
// Return Value
// An object with two properties:

// correct - assigned an array which contains all of the words in the userWords array which are spelled correctly
// incorrect - assigned an array which contains all of the words in the userWords array which are not spelled correctly

// Examples
// spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"]) // -> { correct: ["boy", "ice cream"], incorrect: ["duct", "sendwich"]}
// spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"]) // -> {correct: ["jam", "sound"], incorrect:["breat"]}
// spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"]) // -> {correct: ["java"], incorrect: ["CDS","HTMO"]}






// Answer:

function spellChecker(userWords, correctWords) {
  const result = {
    correct: [],
    incorrect: []
  }

  for(let i = 0; i < userWords.length; i++) {
    if(correctWords.includes(userWords[i])) {
      result.correct.push(userWords[i])
    } else {
      result.incorrect.push(userWords[i])
    }
  }
  return result
}
