// Question:

ES6: Destructuring Objects IV
const obj = { first: "James", last: "Baker", alias: "JB" }

var { first = "John", last = "Doe", alias } = obj

console.log(nickname) // outputs nickname is not defined
There may be times where we would like the property name to be different from the object property
names we receive and also give those new property names a default value.Use ES6 object destructuring
to rename the variable alias to nickname and give nickname a default value of "JD".Ignore the.toString() function (used for validation).





// Answer:

const str = `({ first = "John", last = "Doe", alias: nickname } = { first: "James", last: "Baker", alias: "JD"}).toString()`
