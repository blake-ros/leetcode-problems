// Question:

Purge and Organize
Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
  Examples
uniqueSort([1, 2, 4, 3]) ➞[1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞[1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞[1, 2, 3, 6, 7]




// Answer:

function uniqueSort(arr) {
  function compareNumbers(a, b) {
    return a - b;
  }

  const uniqueArray = Array.from(new Set(arr));
  const sortedArray = uniqueArray.sort(compareNumbers);
  return sortedArray
}
