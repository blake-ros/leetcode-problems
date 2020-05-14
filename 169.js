// Question:

// 169. Majority Element
// Easy

// 2908

// 213

// Add to List

// Share
// Given an array of size n, find the majority element.The majority element is the
// element that appears more than ⌊ n / 2 ⌋ times.

// You may assume that the array is non - empty and the majority element always exist in the array.

//   Example 1:

// Input: [3, 2, 3]
// Output: 3
// Example 2:

// Input: [2, 2, 1, 1, 1, 2, 2]
// Output: 2




// Answer:
var majorityElement = function(nums) {
const numCounts = {};

for (let num of nums) {
  if (numCounts[num]) {
    numCounts[num]++;
  } else {
    numCounts[num] = 1;
  }
}
if (nums.length === 2) {
  return nums[1];
} else if (nums.length === 1) {
  return nums[0];
}

for (let [key, value] of Object.entries(numCounts)) {
  if (value === numTimesRepeted || value > numTimesRepeted) {
    return key;
  }
}
}
