// Question:

Reverse the Case
Given a string, create a function to reverse the case.All lower - cased letters should be upper - cased, and vice versa.

  Examples
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") ➞ "many thanks"

reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"






// Answer:

function reverseCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    }
  }
  return result
}
