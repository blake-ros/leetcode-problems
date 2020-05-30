// Question:

// 1417. Reformat The String
// Easy

// 79

// 31

// Add to List

// Share
// Given alphanumeric string s. (Alphanumeric string is a string consisting of
//   lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by
// another letter and no digit is followed by another digit.That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to
// reformat the string.



//   Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2",
// "0a1b2c", "0c2a1b" are also valid permutations.






// Answer:

var reformat = function (s) {
  if (s.length <= 1) return s;
  let map = {
    nums: [],
    alp: []
  };
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) map["alp"].push(s[i]);
    else map["nums"].push(s[i]);
  }
  if (Math.abs(map.nums.length - map.alp.length) > 1) return "";

  let maxArr = (map.nums.length >= map.alp.length) ? map.nums : map.alp;
  let smallArr = (map.nums.length < map.alp.length) ? map.nums : map.alp;

  for (let i = 0; i < maxArr.length; i++) {
    maxArr[i] && res.push(maxArr[i]);
    smallArr[i] && res.push(smallArr[i]);
  }
  return res.join("");
};
