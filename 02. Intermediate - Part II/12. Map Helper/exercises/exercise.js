// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

let randNumbers = [1,56,32,6,21,1,2];
const timesTen = randNumbers.map(number => number * 10)

console.log(timesTen);