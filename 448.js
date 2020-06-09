// Question:

// 448. Find All Numbers Disappeared in an Array
// Easy

// 2676

// 232

// Add to List

// Share
// Given an array of integers where 1 ≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.

// Find all the elements of[1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime ? You may assume the returned list does not count as extra space.

//   Example:

// Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [5, 6]






// Answer:

var findDisappearedNumbers = function (nums) {
  let result = [];
  let array = new Array(nums.length + 1);
  for (let i = 0; i < nums.length; i++) {
    array[nums[i]] = 1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (array[i] === undefined)
      result.push(i);
  }
  return result;
};
