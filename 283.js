// Question:

// Given an array nums, write a function to move all

// 0's to the end of it while maintaining the

// relative order of the non-zero elements.





// Answer:

var moveZeroes = function (nums) {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i = i - 1;
    }
  }
}
