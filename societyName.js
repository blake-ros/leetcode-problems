// Question:

Secret Society
A group of friends have decided to start a secret society.The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

  Examples
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"







// Answer:

function societyName(friends) {
  let result = "";
  const sortedFriends = friends.sort();
  for (let i = 0; i < sortedFriends.length; i++) {
    result += sortedFriends[i][0]
  }
  return result
}
