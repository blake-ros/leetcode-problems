// Question:

Get Students with Names and Top Notes
Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

If student has no notes(an empty array) then let's assume topNote: 0.

Examples
[
  { name: "John", notes: [3, 5, 4] }
]➞[
  { name: "John", topNote: 5 }
]



// Answer:

function getStudentsWithNamesAndTopNotes(students) {
  const myArray = students
  const newArray = students.map(value => {
    let backupNote = 0;
    const notes = value.notes
    for (let i = 0; i < notes.length; i++) {
      if (notes[i] > backupNote) {
        backupNote = notes[i]
      }
    }
    const myObject = {};
    myObject.name = value.name
    myObject.topNote = backupNote
    return myObject
  });
  return newArray
}
