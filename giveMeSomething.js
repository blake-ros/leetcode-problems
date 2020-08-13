// Question:

Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.

  Examples
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"



// Answer:

function giveMeSomething(a) {
  let concatString = "something ";
  let result = concatString + a
  return result
}
