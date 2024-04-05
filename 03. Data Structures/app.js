//
// 1. Arrays --> 0 index based
//--------------------
// let fruits = ["mango", "orange", "apple"];
// console.log(fruits);

//
//--------------------
// empty array
//--------------------
// const myList = [];
// console.log(myList);

// const numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray);
//--------------------

//
//--------------------
// String array
//--------------------
// const strArray = ["eat", "sleep", "code", "repeat"];

// Accessing items from our array
// console.log(strArray[0]);
// console.log(strArray[1]);
// console.log(strArray[2]);
// console.log(strArray[3]);
//--------------------

//
//--------------------
// Nested Array || Two dimensional Array
//--------------------
// const nestArr = ["one", ["two", "three"], 1, true, false];
// console.log(nestArr);
// console.log(nestArr[1][1]);

// const myLetters = ["h", "e", "l", "l", "o"];
// console.log(myLetters);
//--------------------

//challengeOne given

//
// 2. Array Methods
//--------------------
// const fruits = [
//   "apples",
//   "pomegranate",
//   "mango",
//   "strawberries",
//   "pinnaples",
//   "grapefruit",
// ];

//
//--------------------
// push method
//--------------------
// console.log(fruits.length);
// fruits.push("Banana");
// console.log(fruits.length);
//--------------------

//
//--------------------
// pop method
//--------------------
// console.log(fruits.length);
// fruits.pop();
// console.log(fruits);
//--------------------

//
//--------------------
// shift method
//--------------------
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
//--------------------

//
//--------------------
// unshift method
//--------------------
// console.log(fruits);
// fruits.unshift("orange");
// console.log(fruits);
//--------------------

//
//--------------------
// concat method
//--------------------
// const fruits = ["apples", "pomegranate", "mango"];
// const moreFruits = ["strawberries", "pinapple", "grapfruit"];
// const totalFruits = fruits.concat(moreFruits);

// console.log(totalFruits);
//--------------------

//
//--------------------
// includes method
//--------------------
const pl = ["Javascript", "Golang", "python", "php"];
const number = [3, 5, 2, 3, 1];
// console.log(pl.includes("Golang"));
//--------------------

//
//--------------------
// join method
//--------------------
// console.log(pl.join("-"));
//--------------------

//
//--------------------
// reverse method
//--------------------
// console.log(pl.reverse());
//--------------------

//
//--------------------
// slice method
//--------------------
// console.log(pl.slice(0, 2));
//--------------------

//
//--------------------
// sort method
//--------------------
// console.log(number);
// console.log(number.sort());
//--------------------

//
// 3. Objects
//--------------------
// Objects --> 'orange'
const person = {
  // key: "value"
  firstName: "Greg",
  lastName: "WebDev",
  age: 19,
  location: ["Planet", "Earth"],
  isProgrammer: true,
  obj: {},
};

// console.log(typeof person);
