// Question:

// 268. Missing Number
// Easy

// 1583

// 1941

// Add to List

// Share
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find
// the one that is missing from the array.

//   Example 1:

// Input: [3, 0, 1]
// Output: 2







// Answer:

var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (1 + nums.length) / 2 * nums.length - sum;
};
