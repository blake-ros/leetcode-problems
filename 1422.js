// Question:

// 1422. Maximum Score After Splitting a String
// Easy

// 91

// 6

// Add to List

// Share
// Given a string s of zeros and ones, return the maximum score after splitting
// the string into two non - empty substrings(i.e.left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring
// plus the number of ones in the right substring.



//   Example 1:

// Input: s = "011101"
// Output: 5
// Explanation:
// All possible ways of splitting s into two non - empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3






// Answer:

var maxScore = function (s) {
  if (!s || s.length < 2) return 0;

  const last = s.length - 1;

  let max = s.length; // assume we have the best score out of a string
  if (s[0] === "1") max--;
  if (s[last] === "0") max--;

  let ones = 0, zeros = 0;

  // travel from left to right
  for (let i = 1; i < last; i++) {
    if (s[i] === "1") {
      ones++;  // count the number of "1"
    } else {
      zeros++; // count the number of "0"
      max--; // We know every "0" on the right will reduce possible max by 1
      if (zeros > ones) { // if we have more zeros than ones on the right, correct max
        max = max + zeros - ones;  // correct it !

        // reset counters since we have the new max
        zeros = 0;
        ones = 0;
      }
    }
  }

  return max;
};
