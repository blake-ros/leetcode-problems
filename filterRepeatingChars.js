// Question:

// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters(in other words, it has a set size of 1).

//   Examples
// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
// ➞["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"])
// ➞["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
// ➞[]



// Answer:

function identicalFilter(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 1) {
      let mySet = new Set(arr[i]);
      if (mySet.size === 1) {
        result.push(arr[i])
      }
    }
  }
  return result
}
