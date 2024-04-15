// Write a function called calcuateProduct that takes an array of numbers as an
// argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this
// taks.

// Something like this:
const numbers = [2,3,4,5];
const calcuateProduct = numbers.reduce((p,c) => p * c)

console.log(calcuateProduct); // 120 


// function calcuateProduct(arr) {
//    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
// }

// console.log(calcuateProduct(numbers));