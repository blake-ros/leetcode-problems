// Question:

Finding Common Elements
Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

  Examples
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞[3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞[1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞[1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞[]




// Answer:

function commonElements(arr1, arr2) {
  let result = [];
  const filteredOne = arr1.filter((item, index) => {
    return arr1.indexOf(item) === index
  });
  const filteredTwo = arr2.filter((item, index) => {
    return arr2.indexOf(item) === index
  });
  for (let i = 0; i < filteredOne.length; i++) {
    for (let j = 0; j < filteredTwo.length; j++) {
      if (filteredOne[i] === filteredTwo[j]) {
        result.push(filteredOne[i])
      }
    }
  }
  return result
}
