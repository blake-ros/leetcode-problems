// Question:

Convert an Array to a String
Create a function that takes an array of numbers or letters and returns a string.

  Examples
arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"





// Answer:

function arrayToString(arr) {
  const myArray = arr.join("");
  return myArray
}
