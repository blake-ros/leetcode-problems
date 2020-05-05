// Question:

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

//   Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.

//   Input:
// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6], n = 3

// Output: [1, 2, 2, 3, 5, 6]




// Answer:

var merge = function (nums1, m, nums2, n) {
  let curIndex = m + n;
  let num1 = nums1[--m];
  let num2 = nums2[--n];

  while (curIndex) {
    if (n < 0) {
      break;
    }
    if (num1 > num2) {
      nums1[--curIndex] = num1;
      num1 = nums1[--m];
    } else {
      nums1[--curIndex] = num2;
      num2 = nums2[--n];
    }
  };
};
