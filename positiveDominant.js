// Question:

Positive Dominant
An array is positive dominant if it contains strictly more unique positive values than unique negative values.

Write a function that returns true if an array is positive dominant.

  Examples
[1, 1, 1, 1, -3, -4]➞ false
// there is only 1 unique positive value (1)
// there are 2 unique negative values (-3, -4)

[5, 99, 832, -3, -4]➞ true

[5, 0]➞ true

[0, -4, -1]➞ false



// Answer:

function isPositiveDominant(a) {
  let pArray = [];
  let nArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      pArray.push(a[i]);
    } else if (a[i] < 0) {
      nArray.push(a[i])
    }
  }
  const set1 = new Set();
  const set2 = new Set();
  for (let i = 0; i < pArray.length; i++) {
    set1.add(pArray[i])
  }
  for (let i = 0; i < nArray.length; i++) {
    set2.add(nArray[i])
  }

  const positiveSize = set1.size
  const negativeSize = set2.size

  if (positiveSize > negativeSize) {
    return true
  } else {
    return false
  }
}
