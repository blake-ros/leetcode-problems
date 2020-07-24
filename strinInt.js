// Question:

Return a String as an Integer
Create a function that takes a string and returns it as an integer.

  Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12


// Answer:

function stringInt(str) {
  var myNew = parseInt(str);
  return myNew
}
