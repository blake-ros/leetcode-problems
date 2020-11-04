// Question:

Number Split
Given a number, return an array containing the two halves of the number.If the number is odd, make the rightmost number higher.

  Examples
numberSplit(4) ➞[2, 2]

numberSplit(10) ➞[5, 5]

numberSplit(11) ➞[5, 6]

numberSplit(-9) ➞[-5, -4]





// Answer:

function numberSplit(n) {
  let result = [];
  if (n % 2 === 0) {
    const splitNum = (n / 2);
    result.push(splitNum, splitNum);
  } else if (n % 2 !== 0) {
    const newNum = n - 1;
    const newestNum = (newNum / 2);
    const newerNum = (newestNum + 1)
    result.push(newestNum, newerNum)
  }
  return result
}
