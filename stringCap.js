// Question:

// Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

//   Examples
// capMe(["mavis", "senaida", "letty"]) ➞["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞["Slyvia", "Kristal", "Sharilyn", "Calista"]




// Answer:

function capMe(arr) {
  let result = [];
  function helperFunc(word) {
    let updatedString = "";
    updatedString = word.toLowerCase();
    let withoutCap = updatedString.slice(1)
    let uppcaseFirstLetter = updatedString.charAt(0).toUpperCase();
    return uppcaseFirstLetter + withoutCap
  }

  for (let i = 0; i < arr.length; i++) {
    const newString = helperFunc(arr[i]);
    result.push(newString);
  }
  return result
}
