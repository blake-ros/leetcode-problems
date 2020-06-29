// Question:

// Lowercase and Uppercase Map
// Write a function that creates an object with each(key, value) pair being the(lower case, upper case) versions of a letter, respectively.

//   Examples
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }



// Answer:

function mapping(letters) {
  const myArray = [];
  for (let i = 0; i < letters.length; i++) {
    const uppercase = letters[i].toUpperCase();
    const index = letters[i];
    myArray.push([index, uppercase]);
  }
  const entries = new Map(myArray);
  const object = Object.fromEntries(entries);
  return object
}
