// Question 551

// You are given a string representing an attendance record for a student.The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.

// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or
// more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

//   Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False



// Answer:

var checkRecord = function (s) {
  let countA = 0;
  let countL = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      countA++;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (s[j] === 'L') {
      countL++;
      if (s[j + 1] === 'L') {
        countL++;
        if (s[j + 2] === 'L') {
          return false
        }
      }
    }
  }

  if (countA > 1) {
    return false
  } else if (countA <= 1) {
    return true
  }

};
