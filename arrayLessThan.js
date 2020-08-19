// Question:

Less Than 100 Array Remix
Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

  Examples
arrayLessThan100([5, 57]) ➞ true

arrayLessThan100([77, 30]) ➞ false

arrayLessThan100([0]) ➞ true


// Answer:

function arrayLessThan100(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  if (total >= 100) {
    return false
  } else {
    return true
  }
}
