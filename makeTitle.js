// Question:

Capitalize the First Letter of Each Word
Create a function that takes a string as an argument and converts the first character of each word to uppercase.Return the newly formatted string.

  Examples
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"






// Answer:

function makeTitle(str) {
  const stringSplit = str.split(" ");
  let result = "";
  for (let i = 0; i < stringSplit.length; i++) {
    const word = stringSplit[i];
    const capital = word.substring(0, 1).toUpperCase();
    const remainingWord = word.substring(1, word.length);
    const newWord = capital + remainingWord;
    result += newWord + " ";
  }
  const trim = result.trim();
  return trim
}
