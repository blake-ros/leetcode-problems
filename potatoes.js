// Question:

Find the Amount of Potatoes
Create a function to return the amount of potatoes there are in a string.

  Examples
potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1



// Answer:

function potatoes(str) {
  const regex = /potato/gm
  const count = str.match(regex);
  const result = count.length
  return result
}
