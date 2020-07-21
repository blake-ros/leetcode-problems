// Question:

// One Button Messaging Device
// Imagine a messaging device with only one button.For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.

// Write a function that takes a string(the message) and returns the total number of times the button is pressed.

//   Examples
// howManyTimes("abde") ➞ 12

// howManyTimes("azy") ➞ 52

// howManyTimes("qudusayo") ➞ 123






// Answer:

function howManyTimes(msg) {
  let count = 0
  for (let i = 0; i < msg.length; i++) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let j = 0; j < alphabet.length; j++) {
      if (msg[i] === alphabet[j]) {
        count += (j + 1)
      }
    }
  }
  return count
}
