// Question:

// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers.Return a new (single) array with the largest numbers of each.

//   Examples
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞[7, 90, 2]


// Answer:

function findLargestNums(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(...arr[i]))
  }
  return result
}
