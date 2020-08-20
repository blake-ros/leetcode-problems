// Question:

Match the Last Item
Create a function that takes an array of items and checks if the last item matches the rest of the array.

  Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true




// Answer:

function matchLastItem(arr) {
  let test = "";
  const value = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    test += arr[i]
  }

  if (test === value) {
    return true
  } else {
    return false
  }
}
