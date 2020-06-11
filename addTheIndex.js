// Question:

// Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞[0, 1, 2, 3, 4]

// addIndexes([1, 2, 3, 4, 5]) ➞[1, 3, 5, 7, 9]

// addIndexes([5, 4, 3, 2, 1]) ➞[5, 5, 5, 5, 5]






// Answer:

function addIndexes(arr) {
  let count = 0;
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] += i)
  }
  return newArray
}
