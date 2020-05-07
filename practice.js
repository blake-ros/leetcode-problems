// Reverse a String

const str = 'fox';


function reverseString(str) {
  let newStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(newStr);

// newStr = 'xof'

// i = 2, 1, 0, -1

// str.length = 2





























// Reverse an Array

const arr = [3, 2, 1];

let newArr = [];

for( let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

console.log(newArr);





// Delete all items in an array without making a copy of the array

const deleteArray = [7, 6, 5, 4, 3, 2, 1, 0];

console.log(deleteArray);

deleteArray.splice(0, deleteArray.length);

console.log(deleteArray);




// What is a "closure" in Javascript? Provide an example.

// A closure is an inner function that has access to the variables in the outer(enclosing)
// function’s scope chain.The closure has access to variables in three scopes;
// specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and(3) global variables.


var globalVar = "xyz"; // we have a global variable

(function outerFunc(outerArg) { // we declare an outer function that has a parameter of an outerArg
  var outerVar = 'a';           // we declare an outer variable

  (function innerFunc(innerArg) { // inside outer function we declare an inner function with a parameter of innerArg
    var innerVar = 'b';           // we declare an inner variable

    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);

  })(456);
})(123);



// In the above example, variables from innerFunc, outerFunc,
// and the global namespace are all in scope in the innerFunc.
// The above code will therefore produce the following output:

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz



// Add a new property to an Object.

// Example
var person = {
  age: 30,
  name: 'Blake'
}


// adding the new property with dot notation
person.job = 'Developer';

// deleting a property
delete person.job

console.log(person);





// Add the Index

// Given an array of numbers, create a function which returns the same array but with each

// elements index in the array added to itself. This means you add 0 to the number at index 0,

// add 1 to the number at index 1, etc...


// input = [1, 2, 3, 4, 5]
// output = [1, 3, 5, 7, 9]


// Solution:

function addIndexes(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + i;
  }
  return arr
}



// Question: Sum of the Odd Numbers

// Create a function which returns the total of all the odd numbers including num

// num will be given as an ODD number


// example input addOddToN(5) --> 9
// 1 + 3 + 5 = 9











// JavaScript question:

// What are the primitive data types in JavaScript

// undefined, null, boolean, string, and number





// What method would you use to add an elemtn to the end of an array?
// Answer: array.push


// What method would you use to add an elemetn to the beginning of an array?
// Answer: array.unshiftconst str = 'the quick brown fox';
