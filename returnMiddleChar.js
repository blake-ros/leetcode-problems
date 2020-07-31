// Question:

Return the Middle Character(s) of a String
Create a function that takes a string and returns the middle character(s).If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

  Examples
getMiddle("test") ➞ "es"

getMiddle("testing") ➞ "t"

getMiddle("middle") ➞ "dd"

getMiddle("A") ➞ "A"






// Answer:

function getMiddle(str) {
  if (str.length % 2 !== 0) {
    const num = (str.length / 2) - 0.5
    const character = str.charAt(num);
    return character
  } else {
    const num = (str.length / 2) - 1
    const secondNum = (str.length / 2)
    const firstChar = str.charAt(num);
    const secondChar = str.charAt(secondNum)
    const concat = firstChar + secondChar
    return concat
  }
}
