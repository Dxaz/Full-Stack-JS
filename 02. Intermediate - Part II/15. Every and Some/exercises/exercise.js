// REFACTOR -> USE EVERY AND SOME HELPERS
let products = [
    {name: "Checkers", category: "Toys"},
    {name: "Harry Potter", category: "Books"},
    {name: "iPhone", category: "Electronics"},
    {name: "Learn PHP", category: "Books"},
];

// let allProductsBooks = true;
// let someProductBooks = false;

// for (let i = 0; i < products.length; i++) {
//     if (products[i].category != "Books") {
//         allProductsBooks = false;
//     } else {
//         someProductBooks = true;
//     } 
// };

// console.log(allProductsBooks);
// console.log(someProductBooks);

const allProductsBooks = products.every(product => product.category === "Books");
const someProductBooks = products.some(product => product.category === "Books")

console.log(allProductsBooks);
console.log(someProductBooks);
