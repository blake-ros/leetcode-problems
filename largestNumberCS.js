// Question:

Easy

Codewriting

300

Given an integer n, return the largest number that contains exactly n digits.

  Example

For n = 2, the output should be
largestNumber(n) = 99.

Input / Output

[execution time limit]4 seconds(js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 9.

[output] integer

The largest integer of length n.




// Answer:

function largestNumber(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += "9"
  }
  const myInteger = parseInt(result);
  return myInteger
}
