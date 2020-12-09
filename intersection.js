// Question:

intersection(first, second)
Parameters
first - Any JavaScript Array
second - Any JavaScript Array
Return Value
A new Array containing unique values found in both first and second.The order of result values is determined by the order they occur.



// Answer:

function intersection(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        result.push(first[i]);
      }
    }
  }

  for (let i = 0; i < second.length; i++) {
    for (let j = 0; j < first.length; j++) {
      if (second[i] === first[j]) {
        result.push(second[i]);
      }
    }
  }

  const newValue = [...new Set(result)];
  return newValue;
}
