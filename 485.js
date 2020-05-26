// Question:

// 485. Max Consecutive Ones
// Easy

// 592

// 352

// Add to List

// Share
// Given a binary array, find the maximum number of consecutive 1s in this array.

//   Example 1:
// Input: [1, 1, 0, 1, 1, 1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.








// Answer:

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    }

    if (nums[i + 1] !== 1 && count > maxLength) {
      maxLength = count;
    }

    if (nums[i] === 0) {
      count = 0;
    }
  }
  return maxLength
}
