// Question:

// 896. Monotonic Array
// Easy

// 571

// 34

// Add to List

// Share
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].An array
// A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.



//   Example 1:

// Input: [1, 2, 2, 3]
// Output: true
// Example 2:

// Input: [6, 5, 4, 4]
// Output: true
// Example 3:

// Input: [1, 3, 2]
// Output: false
// Example 4:

// Input: [1, 2, 4, 5]
// Output: true






// Answer:

var isMonotonic = function (A) {
  let direction = '';
  let i = 0;
  if (A[i] < A[i + 1]) {
    direction = 'increasing';
  } else if (A[i] > A[i + 1]) {
    direction = 'decreasing';
  }

  if (direction = 'increasing') {
    for (let j = 0; j < A.length; j++) {
      for (let x = 1; x < A.length; x++) {
        if (A[j] <= A[x]) {
          j++;
        } else if (A[j] > A[x]) {
          return false;
        }
      }
      return true;
    }
  }

  if (direction = 'decreasing') {
    for (let j = 0; j < A.length; j++) {
      for (let x = 1; x < A.length; x++) {
        if (A[j] >= A[x]) {
          j++
        } else if (A[j] < A[x]) {
          return false;
        }
      }
      return true;
    }
  }
};
