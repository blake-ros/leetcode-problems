// Question:

function leader(arr) {
  let result = [];
  let copy = arr;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const slice = copy.slice(i + 1);
    const every = slice.every(check => {
      return value > check
    });
    if (every) {
      result.push(value)
    }
  }
  return result
}




// Answer:

Leader in an Array
Create a function that finds all elements in the given array, such that each element is greater than all elements to the right of it.

  Examples
leader([2, 3, 20, 15, 8, 3]) ➞[20, 15, 8, 3]
// Note that, 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

leader([2, 3, 20, 15, 8, 25, 3]) ➞[25, 3]
// Note that, 20 cannot be added because 25 is present,
// which is greater than 20.

leader([1, 2, 3, 4, 5]) ➞[5]
