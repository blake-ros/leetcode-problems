// Question:

// is - santa - coming

// Description
// Define a function named isSantaComing which receives a date object as an argument
// and returns true if the date object's date is December 24th and false if the date
// object's date is not December 24th




// Answer:

var date = new Date(2001, 11, 24);

function isSantaComing(date) {
  var month = date.getMonth();
  var day = date.getUTCDate();

  console.log(month);
  console.log(day);

  if(month === 11 && day === 24) {
    return true;
  } else {
    return false;
  }
}

console.log(isSantaComing(date));
