// Question:

// Quarantine TP
// Can you spare a square ?

//   Try to imagine a world in which you might have to stay home for 14 days at any given time.Do you have enough TP to make it through ?

//     Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.

// Create a function that will receive an object with two key / values:

// people ⁠— Number of people in the household.
//   tp ⁠— Number of rolls.
// Return a statement telling the user if they need to buy more TP!

// Examples
// tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"

// tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"

// tpChecker({ people: 4, tp: 12 } ➞ "Your TP will last 26 days, no need to panic!"



// Answer:

function tpChecker(home) {
  const sheetsPerDay = home.people * 57
  const sheetsTotal = sheetsPerDay * 14
  const tpSheets = home.tp * 500
  const sheetTime = Math.floor(tpSheets / sheetsPerDay)

  if (sheetTime <= 13) {
    return `Your TP will only last ${sheetTime} days, buy more!`
  } else if (sheetTime > 13) {
    return `Your TP will last ${sheetTime} days, no need to panic!`
  }
}
