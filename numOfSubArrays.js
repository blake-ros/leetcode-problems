// Question:

// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

//   Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0





// Answer:

function numOfSubbarrays(arr) {
  var arrayLength = arr.length;
  var value = arr[0]
  console.log(Array.isArray(value))
  if (Array.isArray(value)) {
    return arrayLength
  } else {
    return 0
  }
}
