// Question:

// Description
// Define a function named findingNemo which takes in a string of multiple words and returns the position of the word Nemo in the string argument

// Syntax
// findingNemo(sentence)
// Parameters
// sentence - a JavaScript string which contains a series of words and includes the word Nemo
// Return Value
// A numeric value which represents the position of the word Nemo in the argument string

// Examples
// findingNemo("I am Nemo") // -> 3
// findingNemo("Where is Nemo my son?") // -> 3
// findingNemo("Nemo is my name") // -> 1



// Answer:

function findingNemo(string) {
  const wordArray = string.split(' ');
  const nemo = "Nemo"
  for(let i = 0; i < wordArray.length; i++) {
    if(wordArray[i] === nemo) {
      return i + 1
    }
  }
}

console.log(findingNemo("I am Nemo"));
console.log(findingNemo("Where is Nemo my son?"));
console.log(findingNemo("Nemo is my name"));
