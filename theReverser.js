// Question:

The Reverser!
The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

Examples
reverse("Hello World") ➞ "DLROw OLLEh"

reverse("ReVeRsE") ➞ "eSrEvEr"

reverse("Radar") ➞ "RADAr"






// Answer:

function reverse(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newString += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      newString += str[i].toUpperCase();
    }
  }
  console.log(newString)
  let result = "";
  for (let j = newString.length - 1; j >= 0; j--) {
    result += newString[j]
  }
  return result
}
