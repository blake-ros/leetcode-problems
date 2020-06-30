// Question:

// Edabit Experience Points
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question.The points for each difficulty are as follows:

//   Difficulty	Experience Points
// Very Easy	5XP
// Easy	10XP
// Medium	20XP
// Hard	40XP
// Very Hard	80XP
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

// Examples
// getXP({
//   "Very Easy": 89,
//   "Easy": 77,
//   "Medium": 30,
//   "Hard": 4,
//   "Very Hard": 1
// }) ➞ "2055XP"



// Answer:

function getXP(obj) {
  const veryEasy = obj["Very Easy"] * 5;
  const easy = obj["Easy"] * 10;
  const medium = obj["Medium"] * 20;
  const hard = obj["Hard"] * 40;
  const veryHard = obj["Very Hard"] * 80;

  const myLargeNumber = (veryEasy + easy + medium + hard + veryHard) + "XP"
  return myLargeNumber
}
