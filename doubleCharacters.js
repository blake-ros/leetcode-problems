// Question:

Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.

  Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "


// Answer:

function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += (str[i] + str[i]);
  }
  return result
}
