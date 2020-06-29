// Question:

// International Greetings
// Suppose you have a guest list of students and the country they are from, stored as key - value pairs in an object.

// const GUEST_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina"
// }
// Write a function that takes in a name and returns a name tag, that should read:

// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:

// "Hi! I'm a guest."
// Examples
// greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

// greeting("Monti") ➞ "Hi! I'm a guest."




// Answer:

const guestList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

function greeting(name) {
  if (guestList.hasOwnProperty(name)) {
    for (const property in guestList) {
      const value = guestList[property]
      if (property === name) {
        return `Hi! I'm ${property}, and I'm from ${value}.`
      }
    }
  } else {
    return `Hi! I'm a guest.`
  }
}
