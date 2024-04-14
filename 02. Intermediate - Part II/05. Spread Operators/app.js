//
// -----------------------------
//  5. Spread Operators
// -----------------------------
// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.
// -----------------------------
// Functions, Array, Objects
// -----------------------------
// Functions
// -----------------------------
function giveMe4(a,b,c,d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

const colors = ['red', 'green', 'blue', 'teal']

// ... <-- array spread operator
giveMe4(...colors) 
    //a red app.js
    // b green app.js
    // c blue app.js
    // d teal
// -----------------------------

// -----------------------------
// Arrays
// -----------------------------
const strNums =  ['one', 'two', 'three']
const moreStrNums = ['four', 'five', 'six']
const concat = [...strNums, ...moreStrNums]

console.log(concat);

let peoples = ['greg', 'alex', 'jordan']
const allPeeps = ['kumar', ...peoples, 'John'];

console.log(allPeeps);

// -----------------------------
// Objects
// -----------------------------
const obj1 = {x: 1, y: 2}
const obj2 = {z:3}
const obj3 = {...obj1, ...obj2}

console.log(obj3);

let person = {
    name: "Greg",
    age: "19",
    gender: "male"
};

const clone = {...person, work: "programmer", location: "idk"}
console.log(clone); // shallow copy
console.log(person);


// challenge given
