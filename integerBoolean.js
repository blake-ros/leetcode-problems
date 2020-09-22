// Question:

True Ones, False Zeros
Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

  Examples
integerBoolean("100101") ➞[true, false, false, true, false, true]

integerBoolean("10") ➞[true, false]

integerBoolean("001") ➞[false, false, true]




// Answer:

function integerBoolean(n) {
  let result = [];
  const good = "1"
  const bad = "0"
  for (let i = 0; i < n.length; i++) {
    if (n[i] === good) {
      result.push(true)
    } else if (n[i] === bad) {
      result.push(false)
    }
  }
  return result
}
