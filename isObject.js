// Question:

Is it an Object ?
  Create a function to check whether the given parameter is an Object or not.

    Examples
isObject(function add(x, y) { return x + y; }) ➞ true

isObject(new Regex("^[a-zA-Z0-9]+$)", "g")) ➞ true

isObject(null) ➞ false

isObject("") ➞ false



// Answer:

function isObject(value) {
  if (value === null) {
    return false
  }


  if (typeof value === "null") {
    return false
  } else if (typeof value === "object") {
    return true
  } else {
    return false
  }
}
