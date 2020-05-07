// Create a Function that Reverses a String:
// Input:
// str = 'the quick brown fox';
// Parameter: 'You cant use any str.methods'
// output = 'xof nworb kciuq eht'

// Psuedo code your steps

// design algorithm

// trace

// const num = 43;

// function oddOrEven(num) {
//   let result = 0;

//   while(num >= 0) {
//     result += num;
//     num--;
//   }

//   if(result % 2 !== 0) {
//     return "Oddish"
//   } else {
//     return "Evenish"
//   }
// }

// oddOrEven(num);

const arr = [1, 2, 3, 4, 5, 6, 97]

function whereIsSeven(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] === 7) {
      return "Boom!";
    }
  }
}

whereIsSeven(arr);
