// Question:

Fix the Error: Value vs.Reference Types
Create a function that returns true if two arrays contain identical values, and false otherwise.

To solve this question, your friend writes the following code:

function checkEquals(arr1, arr2) {
  if (arr1 === arr2) {
    return true
  } else {
    return false
  }
}




// Answer:

function checkEquals(arr1, arr2) {
  const Array1 = arr1.toString();
  const Array2 = arr2.toString();
  if (Array1 === Array2) {
    return true
  } else {
    return false
  }
}
