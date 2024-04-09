// Part I.
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)

// ES5 code
// var a = 1;
// var b = 2;
// var c = 3;
// var obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// const a = 1;
// const b = 2;
// const c = 3;
// const obj = { a, b, c };
// console.log(obj);

// Part II.

// ES5 code
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// console.log(lib.sum(2, 3)); //5
// console.log(lib.mult(2, 3)); // 6

// ES6 Code
// const lib = {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b,
// };

// console.log(lib.sum(2, 3)); //5
// console.log(lib.mult(2, 3)); // 6

// Part III.

// ES5 Code
// function getPersonES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// console.log(getPersonES5("Greg", 19, 200));
// Expected output: {name: 'Greg', age: 19, height: 200 }

// function getPersonES6(name, age, height) {
//   return { name, age, height };
// }

// console.log(getPersonES6("Greg", 19, 200));
