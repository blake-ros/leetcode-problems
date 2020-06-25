// Question:

// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key - value pair.

//   Examples
// toArray({ a: 1, b: 2 }) ➞[["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞[["shrimp", 15], ["tots", 12]]

// toArray({}) ➞[]




// Answer:

function toArray(obj) {
  let result = Object.entries(obj);
  return result
}
