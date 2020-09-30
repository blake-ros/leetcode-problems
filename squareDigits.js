// Question:

Square Every Digit
Create a function that squares every digit of a number.

  Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649




// Answer:

function squareDigits(n) {
  let combine = 0;
  const result = n.toString().split('').map(number => {
    return (number * number);
  });
  for (let i = 0; i < result.length; i++) {
    combine += result[i] + '';
  }
  const newResult = combine.slice(1)
  const finalResult = parseInt(newResult);
  return finalResult
}
