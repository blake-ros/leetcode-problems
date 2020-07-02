// Question:

// Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}".However, if no argument is passed, return "Today, I am feeling neutral".

//   Examples
// moodToday("happy") ➞ "Today, I am feeling happy"

// moodToday("sad") ➞ "Today, I am feeling sad"

// moodToday() ➞ "Today, I am feeling neutral"






// Answer:

function moodToday(mood) {
  var myStr = "Today, I am feeling "
  mood = typeof mood !== 'undefined' ? mood : "neutral";
  return myStr + mood
}
