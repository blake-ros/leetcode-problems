// Question:

Hiding the Card Number
Write a function that takes a credit card number and only displays the last four characters.The rest of the card number must be replaced by ************.

  Examples
cardHide("1234123456785678") ➞ "************5678"

cardHide("8754456321113213") ➞ "************3213"

cardHide("35123413355523") ➞ "**********5523"






// Answer:

function cardHide(card) {
  const lastFour = card.slice(-4);
  const otherNums = card.slice(0, -4);
  let result = "";
  for (let i = 0; i < otherNums.length; i++) {
    result += "*";
  }
  return result + lastFour
}
