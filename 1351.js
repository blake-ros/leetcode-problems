// Question:

// 1351. Count Negative Numbers in a Sorted Matrix
// Easy

// 264

// 19

// Add to List

// Share
// Given a m * n matrix grid which is sorted in non - increasing order both row
// - wise and column - wise.

// Return the number of negative numbers in grid.



//   Example 1:

// Input: grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
//   Example 2:

// Input: grid = [[3, 2], [1, 0]]
// Output: 0
// Example 3:

// Input: grid = [[1, -1], [-1, -1]]
// Output: 3
// Example 4:

// Input: grid = [[-1]]
// Output: 1






// Answer:

var countNegatives = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        result++;
      }
    }
  }
  return result;
};
