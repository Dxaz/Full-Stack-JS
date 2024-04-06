//
// 1. If Statements
//--------------------
// if (condition) {...}
// else if (condition) {....}
// else {...}
//--------------------
// let a = 20;
// let b = 20;

// if (a > b) {
//   console.log("a is greater than b");
// } else if (a < b) {
//   console.log("a is less than b");
// } else {
//   console.log("a is equal to b");
// }

// let time = 5;
// let greetings;

// if (time < 10) {
//   greetings = "Good Morning";
//   console.log(greetings);
// } else if (time < 20) {
//   greetings = "Good Day";
//   console.log(greetings);
// } else {
//   greetings = "Good Evening";
//   console.log(greetings);
// }
// challengeOne given

//
// 2. Switch Statements
//--------------------
// switch (expression) {
// case x:
// print
// break;

// case y:
// print
// break;
//}
//--------------------

// let x = 0;
// let bulb;

// switch (x) {
//   case 0:
//     bulb = "off";
//     console.log(bulb);
//     break;
//   case 1:
//     bulb = "on";
//     console.log(bulb);
//     break;
//   default:
//     bulb = "no value found";
//     console.log(bulb);
// }

// let day = ""

// switch (day) {
//   case "monday":
//     console.log("Today is monday");
//     break;
//   case "tuesday":
//     console.log("Today is tuesday");
//     break;
//   case "wednesday":
//     console.log("today is wednesday");
//     break;
//   case "thursday":
//     console.log("today is thursday");
//     break;
//   case "friday":
//     console.log("today is friday");
//     break;
//   case "saturday":
//     console.log("today is saturday");
//     break;
//   case "sunday":
//     console.log("today is sunday");
//     break;
//   default:
//     console.log("Don't know what today is");
// }
// challangeTWo given

//
// 3. for loop
//--------------------
// for (initial Expression; condition; incrementExpression) {}
//--------------------
// for (let index = 0; index <= 10; index++) {
//   console.log(" --- Outer Loop ---", index);
//   // nested loop
//   for (let j = 1; j <= 5; j++) {
//     console.log("--- Inner Loop ---", j);
//   }
// }
// challengeThree Given

//
// 4. while loop
//--------------------
// while (condition) {
// code block to be executed
//}
//--------------------
// let i = 1;
// while (i <= 5) {
//   console.log("Hello World!");
//   i++;
// }
//challengeFour given

//
// 5. do-while loop
//--------------------
// let i = 1;

// do {
//   console.log("Hello world!", i);
//   i++;
// } while (i < 5);
// challengeFive given

//
// 6. Logical Operators
//--------------------
// 1. --> Logical AND (&&)
// -> TRUE if both the operands/boolean values are true, else evaluates to FALSE
const a = true;
const b = false;
const c = 4;

// console.log(a && b);
// console.log(c > 2 && c < 2); // false

// 2. --> Logical OR (||)
// -> TRUE if either of the operands/boolean values is true. evaluates to  FALSE if both are false
// console.log(a || b);
// console.log(b || b);
// console.log(c > 2 || c < 2);

// 3. --> Logical NOT (!)
// -> TRUE if the operands/boolean values is false and vise-versa
// console.log(!a, !b);
//-------------------
// let password = "greg-webdev";

// if (password.length >= 8 || password.includes("web")) {
//   console.log("Valid Password");
// } else {
//   console.log("Invalid password");
// }

// let isTrue = true;
// console.log(!isTrue);
