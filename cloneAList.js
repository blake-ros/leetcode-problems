// Question:

// Clone a List
// The Code tab has a code which attempts to add a clone of an array to itself.There is no error message, but the results are not as expected.Can you fix the code ?

//   Examples
// clone([1, 2, 3]) ➞[1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) ➞["x", "y", ["x", "y"]]





// Answer:

function clone(arr) {
  let copy = arr
  let rest;
  [...rest] = arr
  rest.push(copy);
  return rest
}
