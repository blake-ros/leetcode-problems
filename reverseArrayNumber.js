// Question:

Number to Reversed Array
Create a function that takes a number and returns an array with the digits of the number in reverse order.

  Examples
reverseArr(1485979) ➞[9, 7, 9, 5, 8, 4, 1]

reverseArr(623478) ➞[8, 7, 4, 3, 2, 6]

reverseArr(12345) ➞[5, 4, 3, 2, 1]




// Answer:

function reverseArr(num) {
  const numberDigits = num.toString().split('').reverse();
  let result = [];
  for (let i = 0; i < numberDigits.length; i++) {
    result.push(parseInt(numberDigits[i]))
  }
  return result
}
