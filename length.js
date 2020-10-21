// Question:

Recreating the String.length Property
Create a function which returns the length of a string, WITHOUT using String.length property.

  Examples
length("Hello World") ➞ 11

length("Edabit") ➞ 6

length("wash your hands!") ➞ 16




// Answer:

function length(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== undefined) {
      count++
    }
  }
  return count
}
