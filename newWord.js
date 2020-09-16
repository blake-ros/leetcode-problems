// Question:

Word without First Character
Create a function that takes a word and returns the new word without including the first character.

  Examples
newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum"





// Answer:

function newWord(str) {
  const myString = str.slice(1);
  return myString
}
