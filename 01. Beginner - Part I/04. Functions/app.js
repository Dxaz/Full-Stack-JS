//
// 1. Functions
//--------------------
// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes teh program easier as each small task is divided into a function.
// Function increases readability
// DRY - Don't repeat yourself!
// function name(parameterIfAny) {...}
//--------------------
// Funcion delcaration
//--------------------
// function greet(){
//     console.log('Hello from a function!');
// }

//
//--------------------
// call, run, execute a function
//--------------------
// greet();

//
//--------------------
// function with parameter || local variable
//--------------------
// function sayHello(username) {
//     console.log(`Hello ${username}!`);
// }

// sayHello("Greg") // "Greg" is an argument passed to sayHello function
// sayHello("John Doe")

//
//--------------------
//  return --> function
//--------------------
// function add(x, y) {
//     return x + y
// }

// const res = add(10,20)
// const res1 = add(100,200)
// const res2 = add(1000,2000)
// console.log(res);
// console.log(res1);
// console.log(res2);

// challengeOne given

//
// 2. Declaration & Expression
//--------------------
// Function Declaration
//--------------------
// function sayHello(username) {
//     console.log(`Hello ${username}`);
// }

// sayHello("Greg");
//--------------------

//
//--------------------
// Function Expression
//--------------------
// const greetings = function(user) {
//     console.log(`Hello ${user}`);
// }

// greetings("John")
//--------------------

//
// 3. Callback Function
//--------------------
// When we provide a function as an (argument) to other function 
// that function is known as a callback function.
//--------------------
// showCallFunc(function () {})
// function showCallFunc(fn) {
//     const value = 10;
//     fn(value)
// }

// showCallFunc(function callBackFunc(value){
//     console.log(value)
// });

// function greetings(name, cb) {
//     console.log(`Hello ${name}`);
//     cb()
// }

// function cb(){
//     console.log(`I am a callback function`);
// }

// greetings("John", cb);

// challengeTwo given

//
// 4. Scope
//--------------------
// Scope in JavaScript refers to the current context of code, 
// which determines the accessibility of variables to JavaScript
// There are two types of scopes in JavaScript
// Global Scope variables are those declared outside of a block.
// Local scope variable are those declared inside of a block.
//--------------------
// Global Variable
//--------------------
// let textMessage = "hi"; // global
// console.log(textMessage);
//--------------------

//
//--------------------
// Local Variable
//--------------------
// function showMessage() {
//     let textMessage = "Hello"
//     console.log(textMessage); // local variable
// }

// // console.log(textMessage); // Uncaught ReferenceError: textMessage is not defined

// showMessage();

// for (let i = 0; i < 5; i++) {
//     console.log(i); // Local
//}

// console.log(i); // Global access : ERROR
//--------------------

//
// 5. Method
//--------------------
// Method is a function inside an object
//--------------------
//Defining a method outside the object
// function greet() {
//     return `Hello, my name is ${person.name} & I am ${person.age} years old.`
// }

// const person = {
//     name: "John",
//     age: 30,
//     greet,
// }

// console.log(person.greet())
//--------------------

//
//--------------------
// Real Method
//--------------------
// const person = {
//     name: "John",
//     age: 19,
//     greet: function() {
//         return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
//     },
// };

// console.log(person.greet());

//
// 6. JSON
//--------------------
// JSON - JavaScript Object Notation
// Lightweight data interchange format, that is easy for humans to read and write
// and for systems to parse data from.
//--------------------
// see data.json file
// const person = {
//     name: "John Doe",
//     age: 20,
//     email: "jd@gmail.com",
//     isSubscribed: true,
//     hobbies: ["Reading", "Running", "Cooking"],
//     address: {
//         city: "New York",
//         idk: true
//     },
// };

//
// JSON Stringify()
//--------------------
// console.log(person);

// const jsonString = JSON.stringify(person)
// console.log(jsonString);

// const parsedObject = JSON.parse(jsonString)
// console.log(parsedObject);
//--------------------

//
// 7. Date, Time
//--------------------
// const currentDate = new Date();
// console.log(currentDate);

//--------------------
// provide specific values for the date
//--------------------
// year, month, day, hours, minutes, seconds, miliseconds
// const specificDate = new Date(2024, 2, 24, 12, 30, 0, 0);
// console.log(specificDate);
//--------------------

//
//--------------------
// access data from date
//--------------------
const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const milliseconds = date.getMilliseconds();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`);
// console.log(`Day: ${day}`);
// console.log(`Hour: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);
// console.log(`Milliseconds: ${milliseconds}`);
//--------------------

//
//--------------------
// Format date
//--------------------
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());

//
//--------------------
// Set date
//--------------------
// // date.setDate(date.getDate() + 1)
// date.setDate(date.getDate())
// console.log(date);

//
// 7a. Set Interval and Set Timeout
//--------------------\
// setInterval
//--------------------
// setInterval(
//     () => console.log(`This function will be executed every 2 seconds.`),
//     2000
// );
//--------------------

//
//--------------------
// setTimeout
//--------------------
// setTimeout(function () {
//     console.log(`This function will be executed after 3 seconds`);
// },
// 3000
// );

//
//--------------------
// clearInterval
//--------------------
// Stop the interval after 10 seconds
const intervalId = setInterval(function () {
    console.log(`This function is being executed at the interval`);
}, 1000);

// Stop the interval
setTimeout(() => {
    clearInterval(intervalId)
    console.log(`Interval Stopped`);
}, 10000);
//--------------------
