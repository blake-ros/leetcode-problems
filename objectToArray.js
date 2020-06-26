// Question:

// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

//   Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞[["D", 1], ["B", 2], ["C", 3]]



// Answer:

function objectToArray(obj) {
  let result = Object.entries(obj);
  return result
}
