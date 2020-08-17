// Question:

Finding Nemo
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo: (".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"



// Answer:

function findNemo(sentence) {
  const splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i] === "Nemo") {
      return "I found Nemo at " + (i + 1) + "!"
    }
  }
  return "I can't find Nemo :("
}
