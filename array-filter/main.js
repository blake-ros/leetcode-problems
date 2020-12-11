const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

var evenNumbers = numbers.filter(number => {
  if(number % 2 === 0) {
    return number
  }
});
console.log(evenNumbers);

var overFive = numbers.filter(number => {
  if(number > 5) {
    return number
  }
});
console.log(overFive);

var startsWithE = names.filter(name => {
  if(name.startsWith('E')) {
    return name
  }
});
console.log(startsWithE);

var haveD = names.filter(name => {
  if(name.includes('D') || name.includes('d')) {
    return name
  }
});
console.log(haveD);
