// Question:

// 541. Reverse String II
// Easy

// 395

// 1141

// Add to List

// Share
// Given a string and an integer k, you need to reverse the first k characters for
//  every 2k characters counting from the start of the string.If there are less
//  than k characters left, reverse all of them.If there are less than 2k but greater
//  than or equal to k characters, then reverse the first k characters and left the
//  other as original.
//   Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range[1, 10000]








// Answer:

var reverseStr = function (s, k) {
  let kDiv = Math.ceil(s.length / k);
  let revStr = '';

  for (let i = 0; i < kDiv; i++) {
    let start = i * k;
    let end = start + k;

    if (i % 2 === 0) {
      revStr += reverse(s.substring(start, end));
    } else {
      revStr += s.substring(start, end);
    }
  }

  return revStr;
};

function reverse(str) {
  let rev = '';

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev;
}
