// Question:

Shhh Be Quiet Function
Write a function that removes all capitals letters from a sentence except the first letter, put quotation marks around the sentence and add ", whispered Edabit." to the end.

  Examples
shhh("HI THERE!") ➞ "'Hi there!', whispered Edabit."

shhh("tHaT'S Pretty awesOme") ➞ "'That's pretty awesome', whispered Edabit."

shhh("") ➞ "'', whispered Edabit."



// Answer:

function shhh(sentence) {
  let newSentence = sentence.toLowerCase();
  let capitalLetter = sentence.charAt(0).toUpperCase();
  let mySlice = newSentence.slice(1, newSentence.length)
  const completedSentence = capitalLetter + mySlice
  const updatedSentence = '"' + completedSentence + '"'
  const edabit = ", whispered Edabit."

  const result = updatedSentence + edabit
  return result
}
