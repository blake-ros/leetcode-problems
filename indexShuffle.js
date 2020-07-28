// Question:

Index Shuffle
Write a function that takes all even - indexed characters and odd - indexed characters from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
Examples
indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"






// Answer:

function indexShuffle(str) {
  let evens = "";
  let odds = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      evens += str[i]
    } else if (i === 1) {
      odds += str[i]
    } else if (i % 2 === 0) {
      evens += str[i]
    } else if (i % 2 !== 0) {
      odds += str[i]
    }
  }
  const combinedString = evens + odds
  return combinedString
}
