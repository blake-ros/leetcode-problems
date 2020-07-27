// Question:

Say "Hello" Say "Bye"
Write a function that takes a string name and a number num(either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

  Examples
sayHelloBye("alon", 1) ➞ "Hello Alon"

sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

sayHelloBye("jose", 0) ➞ "Bye Jose"





// Answer:

function sayHelloBye(name, num) {
  const capitalize = name.charAt(0).toUpperCase();
  const newName = name.slice(1);
  const updatedName = capitalize + newName;

  if (num === 1) {
    return "Hello " + updatedName
  } else if (num === 0) {
    return "Bye " + updatedName
  }
}
