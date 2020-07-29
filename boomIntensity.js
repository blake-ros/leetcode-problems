// Question:

Explosion Intensity
Given a number, return a string of the word "Boom", which varies in the following ways:

The string should include n number of "o"s, unless n is below 2(in that case, return "boom").
If n is evenly divisible by 2, add an exclamation mark to the end.
If n is evenly divisible by 5, return the string in ALL CAPS.
If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
The example below should help clarify these instructions.

  Examples
boomIntensity(4) ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

boomIntensity(1) ➞ "boom"
// 1 is lower than 2, so we return "boom"

boomIntensity(5) ➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)

boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)





// Answer:

function boomIntensity(n) {
  const capitalB = "B";
  const capitalM = "M";
  const lowercaseM = "m";
  const oh = "o";

  if (n < 2) {
    return "boom"
  } else if (n % 2 === 0 && n % 5 === 0) {
    const result = capitalB + oh.repeat(n) + capitalM + "!";
    const uppercase = result.toUpperCase();
    return uppercase
  } else if (n % 2 === 0) {
    const result = capitalB + oh.repeat(n) + lowercaseM + "!";
    return result
  } else if (n % 5 === 0) {
    const result = capitalB + oh.repeat(n) + capitalM;
    const uppercase = result.toUpperCase();
    return uppercase
  } else {
    const result = capitalB + oh.repeat(n) + lowercaseM
    return result
  }

}
