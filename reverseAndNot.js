// Question:

ReverseAndNot
Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

To illustrate:

123
We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

Examples
reverseAndNot(123) ➞ 321123

reverseAndNot(152) ➞ 251152

reverseAndNot(123456789) ➞ 987654321123456789




// Answer:

function reverseAndNot(i) {
  const integer = i;
  const test = integer.toString();
  let result = [];
  for (let i = test.length - 1; i >= 0; i--) {
    result.push(test[i]);
  }
  const newArray = result.join('');
  const newResult = parseInt(newArray + integer);
  return newResult
}
