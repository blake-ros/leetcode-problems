// Question:

Find the Bomb
Create a function that finds the word "bomb" in the given string.If there is a bomb, return "Duck!!!" otherwise return "There is no bomb, relax.".

  Examples
bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think ther is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."



// Answer:

function bomb(str) {
  const regex = /bomb/gmi;
  const myValue = regex.test(str);

  if (myValue) {
    return "Duck!!!"
  } else {
    return "There is no bomb, relax."
  }
}
