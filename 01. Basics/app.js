// this is a comment
// clg -> console.log(object);
// log --> console.log(object);

//
// Part 2. Variables
//------------------------------
// (reserved keyword: let var const) (variable name) (type of value)

//------------------------------
// Declare variable
//------------------------------
let name;

//------------------------------
// Assign value
//------------------------------
let banana;
banana = "banana";

//------------------------------
// Things you can not do
// let class = 'variable' (class is a reserved keyword)
// let greg webdev = 'variable' (no spaces)
// let 10gregwebdev = 'variable' (number can not be in front)
// let greg-webdev = 'variable' (cannot use - as this is a substraction object)
//------------------------------
let gregwebdev10 = "variable";
let greg_webdev = "variable";

//------------------------------
// naming conventions
//------------------------------
let GREG = "variable"; // uppercase
let greg = "variable"; // lowercase
let greg_webdevs = "variable"; // snake case
var youtubeChannel = "mrbeast"; // Correct way (Camel case)

// change value of variable
youtubeChannel = "greg webdev";

// cannot change value of const
const youtubeChannels = "mrbeast";
// youtubeChannels = "greg webdev"; // TypeError: invalid assisgnment to const 'youtubeChannels'
// console.log(youtubeChannel);
// challengeOne given

//
// Part 3. Primitive types
//------------------------------
let num = 2;
//------------------------------
// Basic Math
//------------------------------
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 * 2);
// console.log(2 * 2);
// console.log(2 ** 2);

let counter = 10;
counter++;
counter--;
counter--;

//console.log(counter);
//challengeTwo given

//
// Part 4. Boolean
//------------------------------
// Boolean -> true || false || NaN (Not a Number)
//------------------------------
let number = 10;
let isTrue = true;

//------------------------------
// falsy values
// -> false
// -> null
// -> undefined
// -> 0
// -> -0
// -> NaN
// -> '', "", ``, (empty quotes)
//------------------------------
let notDefined = null; //difference between null and undefined is null can be set by programmers while undefined can be set by javascript compilers
// console.log(notDefined);
// challengeThree given

//
// Part 5. Comparison Operators
// -------------------------
// -> Relational Operators
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to
// -------------------------
// console.log(10 > 10); // false
// console.log(10 < 10); // false
// console.log(10 >= 10); // true
// console.log(10 <= 10); // true

//------------------------------
// -> Equality Operators
// === strict equality (type + value)
// !== strict non-equality operators (type + value)
// == loose equality operator (value)
// != loose not equality operator (value)
//-----------------------------
// console.log(10 === 10);
// console.log(10 !== 10);
// console.log(10 == "10");
// console.log(10 != "20");
// challengeFour given

//
// Part 6. Strings
//-------------------------
// let firstName = "Greg ";
// let secondName = `WebDev`;

//-------------------------
//String Concatenation
//-------------------------
// let fullName = firstName + " " + secondName;

//-------------------------
// Append
//-------------------------
// firstName += "WebDev Youtuber";
// let fullName = firstName.concat(secondName);

//-------------------------
// Length
//-------------------------
// console.log(firstName.length);

//-------------------------
// Cases
//-------------------------
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

//-------------------------
// Slice
//-------------------------
// console.log(firstName.slice(0, 3));

//-------------------------
// Split & Join
//-------------------------
// console.log(firstName.split(" ").join("-"));

//-------------------------
//  Includes
//-------------------------
// console.log(firstName.includes("G"));

//-------------------------
// Trim
//-------------------------
// console.log(firstName.trim());

// let firstName = "Greg";
// let lastName = "WebDev";
//
// let fullName = `${firstName} ${lastName} or something`;
// console.log(fullName);
// challengeFive Given

//
// Part 7. Type Conversion
//-------------------------
// let money = "50";

//-------------------------
// Convert String to Number
//-------------------------
// money = parseInt(money);
// money = +money;
// money = Number(money);

//-------------------------
// Convert  number to string
//-------------------------
// let money = 50;
// money = money.toString();
// money = String(money);

//-------------------------
// Convert string to decimal
//-------------------------
let money = "50.245";
money = parseFloat(money);

console.log(money);
console.log(typeof money);
