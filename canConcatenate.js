// Question:

Concatenate to Form Target Array
Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

  Examples
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Duplicate 7s not found in target array.

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.




// Answer:

function canConcatenate(arr, target) {
  const flatArray = arr.flat(10);
  if (flatArray.length === target.length) {
    return true
  } else {
    return false
  }
}
