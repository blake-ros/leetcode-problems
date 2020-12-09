// Question:

difference(first, second)
Parameters
first - Any JavaScript Array
second - Any JavaScript Array
Return Value
A new Array containing the symmetric difference between first and second.That is, elements are included if they are found in one Array, but not the other.The result values are unqiue and their order is determined by the order they occur.

  Examples
difference([2, 1], [2, 3]);
// -> [1, 3]
difference(['html', 'css', 'javascript'], ['php', 'css', 'sql']);
// -> ["html", "javascript", "php", "sql"]
difference(
  ['a', 'link', 'to', 'the', 'past'],
  ['the', 'adventure', 'of', 'link']
)
// -> ["a", "to", "past", "adventure", "of"]




// Answer:

function difference(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        i++;
      }
    }
    result.push(first[i]);
  }

  for (let i = 0; i < second.length; i++) {
    for (let j = 0; j < first.length; j++) {
      if (second[i] === first[j]) {
        i++;
      }
    }
    result.push(second[i]);
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined) {
      result.pop(result[i]);
    }
  }

  return result;
}
