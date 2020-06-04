// Question:

// 520. Detect Capital
// Easy

// 448

// 240

// Add to List

// Share
// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
//   Otherwise, we define that this word doesn't use capitals in a right way.


// Example 1:

// Input: "USA"
// Output: True


// Example 2:

// Input: "FlaG"
// Output: False











// Answer:

var detectCapitalUse = function (word) {
  const allCap = /[^A-Z]/
  const allLow = /[^a-z]/
  const firstCap = /^[A-Z]/


  function check(string) {
    if (!allCap.test(string)) {
      return true
    } else if (!allLow.test(string)) {
      return true
    } else if (firstCap.test(string) && !allLow.test(string.slice(1))) {
      return true
    } else return false
  }

  return check(word)
};
