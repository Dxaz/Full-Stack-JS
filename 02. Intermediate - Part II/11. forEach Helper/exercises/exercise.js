// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of number & add that
// which sum variable.  
// 4. Loop over the array, incrementing the sum variable except this time a
// function gets referenced in the forEach
// 5. print the sum variable.
let nums = [1,2,3,4,5];
let sum = 0;

const addNumber = (numb) => {
    sum += numb
};

nums.forEach((num) => addNumber(num));

console.log(sum);

// You can refactor as such
let sum2 = 0
const addNumber2 = numb => sum2 += numb

nums.forEach(addNumber2)
console.log(sum2);