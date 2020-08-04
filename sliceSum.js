// Question:

Summing a Slice
Given an array and an integer n, return the sum of the first n numbers in the array.

  Examples
sliceSum([1, 3, 2], 2) ➞ 4

sliceSum([4, 2, 5, 7], 4) ➞ 18

sliceSum([3, 6, 2], 0) ➞ 0




// Answer:

function sliceSum(arr, n) {
  const slice = arr.slice(0, n);
  let result = 0;
  for (let i = 0; i < slice.length; i++) {
    result += slice[i]
  }
  return result
}
