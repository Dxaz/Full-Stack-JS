//
// -----------------------------
//  7. Destructuring
// -----------------------------
// Destructuring allows us to "unpack" values from
// data-structures (Arrays, objects) into seperate
// distinct variables
// -----------------------------
// Arrays
// -----------------------------
const foo = [1,2,3]
// console.log(foo[0]);
// console.log(foo[1]);
// console.log(foo[2]);

const [one, two, three] = foo

// console.log(one);
// console.log(two);
// console.log(three);

const foo2 = [1, 2]
const [red, yellow, green, blue] = foo2;

// console.log(red);
// console.log(blue); // undefined | out of bounds

// -----------------------------
// default values
// -----------------------------
// let a, b

// [a=5, b=8] = []
// console.log(a);

// [a=5, b=8] = ["one"]
// console.log(a,b);

// -----------------------------
// Parse array from function
// -----------------------------

// function f() {
//     return [1,2]
    
// }

// let a,b
// [a,b] = f()
// console.log(a); // 1
// console.log(b); // 2

// -----------------------------
// Ignoring return value of a function
// -----------------------------
// function f() {
//     return [1,2,3]
// }

// const [a, ,b] = f() // space ignores destructuring of '2'
// console.log(a);
// console.log(b);


// //Assigning the rest of an arry to a variable
// const [apple, ...banana] = ['one', 'two', 'three', true, 12, ["one"]]
// console.log(apple);
// console.log(banana);
// -----------------------------
// challenge given


// -----------------------------
// Objects
// -----------------------------
// In object destructuring the order doesn't matter but the name does
const student = {name: "Greg", position: "First", rollNo: 27}
const {name, position, rollNo} = student
console.log(name);
console.log(position);
console.log(rollNo);

const {color1} = student
// console.log(color1); // undefined
// challenge given
