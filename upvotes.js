// Question:

Upvotes vs Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.This is calculated by subtracting the number of downvotes from upvotes.

  Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0




// Answer:

function getVoteCount(votes) {
  const upvotes = votes.upvotes
  const downvotes = votes.downvotes

  return upvotes - downvotes
}
