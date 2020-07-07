// Question:

// Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index(zero - based).For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)





// Answer:

function indexMultiplier(arr) {
  if (arr.length <= 0) {
    return 0
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const newNum = arr[i] * i;
    result.push(newNum);
  }

  return result.reduce((accumulator, currentValue) => accumulator + currentValue)
}
