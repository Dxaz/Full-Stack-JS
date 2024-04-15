//
// -----------------------------
//  19. Symbols
// -----------------------------
// Symbol is a unique and immutable primitive data type introduced in ECMAScript
// 6 (ES6). A symbol is often used as an identifier for object properties to
// avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you
// create a symbol, it is unique and cannot be recreated or changed. This
// uniqueness ensures that symbols will not collide with other property names,
// even if they have the same string representation.
// -----------------------------
const mySymbol = Symbol("My custom Symbol")
console.log(mySymbol);

//
// -----------------------------
// Comparing symbols
// -----------------------------

// const mySymbol1 = Symbol("name");
// const mySymbol2 = Symbol("name");

// const obj = {}
// obj[mySymbol1] = "Value 1"
// obj[mySymbol2] = "Value 2"

// console.log(mySymbol1 === mySymbol2);
// console.log(obj);

const symbol1 = Symbol('name');
const symbol2 = Symbol('name');

const greg = {}
greg.age = 10
greg['gender'] = 'male'
greg['gender'] = 'female'
greg[symbol1] = 'alex'
greg[symbol2] = 'john'
console.log(greg);

// -----------------------------
// challenge given