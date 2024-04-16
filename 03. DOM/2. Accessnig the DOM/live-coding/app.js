// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2. getElementById
console.log(document.getElementById("main"));
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
// 4. querySelector
console.log(document.querySelector(".cls")); //class
console.log(document.querySelector(".cls-1")); //class
console.log(document.querySelector("#main")); // id
console.log(document.querySelector("h1")); // tag
// 5. querySelectorAll
const liIterator = document.querySelectorAll("li").entries("li")
console.log(liIterator.next());


console.log(document.querySelectorAll("li".text));
console.log(document.querySelectorAll("h1"));

// ---------------------------------------
// Storing data in variables
