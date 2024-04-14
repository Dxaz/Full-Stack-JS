// 1. Iterate over "ages" array
// 2. Print only those ages which is greater than 18 using find() method

const ages = [3,10,18,20]

const adults = ages.find(age => age > 18)
console.log(adults);

// BONUS => REFACTOR
let products = [
    {name: "Checkers", category: "Toys"},
    {name: "Harry Potter", category: "Books"},
    {name: "iPhone", category: "Electronics"},
    {name: "Learn PHP", category: "Books"},
];
// let product;

// for (let i = 0; i < products.length; i++) {
//     if (products[i].category === "Books") {
//         product = products[i];
//         break;
//     }
// };
// console.log(product);

const product = products.find(product => product.category === "Books")
console.log(product);
