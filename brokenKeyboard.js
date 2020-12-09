// Question:

Broken Keyboard
Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).The function looks like:

findBrokenKeys(correct phrase, what you actually typed)
Examples
findBrokenKeys("happy birthday", "hawwy birthday") ➞["p"]

findBrokenKeys("starry night", "starrq light") ➞["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞["b", "e", "v", "n"]




// Answer:

function findBrokenKeys(str1, str2) {
  let result = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      result.push(str1[i])
    }
  }
  const filteredResult = [...new Set(result)]
  return filteredResult
}
