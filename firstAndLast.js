// Question:

Concatenating First and Last Character of a String
Creates a function that takes a string and returns the concatenated first and last character.

  Examples
firstLast("ganesh") ➞ "gh"

firstLast("kali") ➞ "ki"

firstLast("shiva") ➞ "sa"

firstLast("vishnu") ➞ "vu"

firstLast("durga") ➞ "da"




// Answer:

function firstLast(name) {
  const firstLetter = name[0];
  const lastLetter = name[name.length - 1];
  const myString = firstLetter + lastLetter;
  return myString
}
