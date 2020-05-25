// Question:

// 557. Reverse Words in a String III
// Easy

// 915

// 85

// Add to List

// Share
// Given a string, you need to reverse the order of characters in each word
//  within a sentence while still preserving whitespace and initial word order.

//   Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will
// not be any extra space in the string.






// Answer:

var reverseWords = function (s) {
  var currStr = '',
    resultStr = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] === ' ') {
      resultStr = ' ' + currStr + resultStr;
      currStr = '';
    } else {
      currStr += s[i];
    }
  }
  return currStr + resultStr;
};
