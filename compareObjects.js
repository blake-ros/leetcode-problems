// Question:

Check If objOne Is Equal to objTwo
Create a function that checks to see if two object arguments are equal to one another.Return true if the objects are equal, otherwise, return false.

  Example #1
// The first object parameter.

{
  name: "Benny",
    phone: "3325558745",
      email: "benny@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
    phone: "9853759720",
      email: "jason@edabit.com"
}


➞ false



// Answer:

function isEqual(objOne, objTwo) {
  const firstObj = JSON.stringify(objOne);
  const secondObj = JSON.stringify(objTwo);
  if (firstObj !== secondObj) {
    return false
  } else {
    return true
  }
}
