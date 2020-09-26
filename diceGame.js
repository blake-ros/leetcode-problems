// Question:

Don't Roll Doubles!
John is playing a dice game.The rules are as follows.

Roll two dice.
Add the numbers on the dice together.
Add the total to your overall score.
Repeat this for three rounds.
But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

Create a function which takes in a matrix as input, and return John's score after his game has ended.

Examples
diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27




// Answer:

function diceGame(arr) {
  const rollOne = arr[0];
  const rollTwo = arr[1];
  const rollThree = arr[2];

  if (rollOne[0] === rollOne[1]) {
    return 0
  } else if (rollTwo[0] === rollTwo[1]) {
    return 0
  } else if (rollThree[0] === rollThree[1]) {
    return 0
  }

  const flat = arr.flat(3);
  const reduce = flat.reduce((acc, cur) => {
    return acc + cur
  })
  return reduce
}
