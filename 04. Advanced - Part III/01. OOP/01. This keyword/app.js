// console.log(window);
// console.log(this); // window
// console.log(this === window); 

// window.firstName = "Greg";
// this.lastName = "WebDev"
// console.log(window);
// -------------------------
// This in a function
// -------------------------

// function printThis() {
//     return this; // window
// }


// const res = printThis()
// console.log(res === window);
// -------------------------
// in an object
// -------------------------
// const obj = {
//     firstName: "Greg",
//     lastName: "WebDev",
//     fullName: function (){
//         return `${this.firstName} ${this.lastName}`; // returns owner Object (const obj)
//     },
// };

// const res = obj.fullName()
// console.log(res);
// -------------------------
// const obj = {
//     firstName: "Greg",
//     lastName: "WebDev",
//     // fullName:  () =>  `${this.firstName} ${this.lastName}`, // undefined undefined 
//     fullName:  () => this, // window
// } 

// const res = obj.fullName()
// console.log(res);