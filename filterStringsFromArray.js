// Question:

// Filter out Strings from an Array
// Create a function that takes an array of non - negative integers and strings and return a new array without the strings.

//   Examples
// filterArray([1, 2, "a", "b"]) ➞[1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞[1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞[1, 2, 123]





// Answer:

function filterArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let numberCheck = arr[i];
    if (typeof (numberCheck) === 'number') {
      result.push(numberCheck);
    }
  }
  return result
}
