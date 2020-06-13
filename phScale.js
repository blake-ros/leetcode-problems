// Question:

// The pH Scale
// Given a pH value, return whether that value is "alkaline", "acidic", or "neutral".Return "invalid" if the value given is less than 0 or greater than 14.

// Image of a pH chart

// Examples
// pHName(5) ➞ "acidic"

// pHName(8.7) ➞ "alkaline"

// pHName(7) ➞ "neutral"



// Answer:

function pHName(pH) {
  if (pH < 7 && pH > 0) {
    return "acidic"
  } else if (pH === 7) {
    return "neutral"
  } else if (pH < 0 || pH > 14) {
    return "invalid"
  } else {
    return "alkaline"
  }
}
