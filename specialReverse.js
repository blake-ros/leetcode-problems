// Question:

Reverse Words Starting With a Particular Letter
Write a function that reverses all the words in a sentence that start with a particular letter.

  Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"






// Answer:

function specialReverse(s, c) {
  const myWords = s.split(" ");
  let myResult = "";

  function reverse(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
      result += string[i]
    }
    return result
  }

  for (let i = 0; i < myWords.length; i++) {
    if (myWords[i][0] === c) {
      myResult += reverse(myWords[i]) + " ";
    } else if (myWords[i][0] !== c) {
      myResult += myWords[i] + " ";
    }
  }
  return myResult.trim();
}
