//
// -----------------------------
//  7. Destructuring
// -----------------------------
// Destructuring allows us to "unpack" values from
// data-structures (Arrays, objects) into seperate
// distinct variables
// -----------------------------
// Arrays
// -----------------------------
const foo = [1,2,3]
// console.log(foo[0]);
// console.log(foo[1]);
// console.log(foo[2]);

const [one, two, three] = foo

// console.log(one);
// console.log(two);
// console.log(three);

const foo2 = [1, 2]
const [red, yellow, green, blue] = foo2;

// console.log(red);
// console.log(blue); // undefined | out of bounds

// -----------------------------
// default values
// -----------------------------
// let a, b

// [a=5, b=8] = []
// console.log(a);

// [a=5, b=8] = ["one"]
// console.log(a,b);

// -----------------------------
// Parse array from function
// -----------------------------

// function f() {
//     return [1,2]
    
// }

// let a,b
// [a,b] = f()
// console.log(a); // 1
// console.log(b); // 2

// -----------------------------
// Ignoring return value of a function
// -----------------------------
// function f() {
//     return [1,2,3]
// }

// const [a, ,b] = f() // space ignores destructuring of '2'
// console.log(a);
// console.log(b);


// //Assigning the rest of an arry to a variable
// const [apple, ...banana] = ['one', 'two', 'three', true, 12, ["one"]]
// console.log(apple);
// console.log(banana);
// -----------------------------
// challenge given


// -----------------------------
// Objects
// -----------------------------
// In object destructuring the order doesn't matter but the name does
// const student = {name: "Greg", position: "First", rollNo: 27}
// const {name, position, rollNo} = student
// console.log(name);
// console.log(position);
// console.log(rollNo);

// const {color1} = student
// console.log(color1); // undefined
// challenge given


// -----------------------------
// Functions 
// -----------------------------
// const person = {
//     name: "John Doe",
//     age: 20,
//     country: "USA"
// }
// function printPersonInfo({name, age, country}) {
//     // console.log(`Name: ${person.name}`);
//     // console.log(`Age: ${person.age}`);
//     // console.log(`Country: ${person.country}`);
    
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Country: ${country}`);
// }

// printPersonInfo(person)
// -----------------------------


// -----------------------------
// Rename object properties in destructuring 
// -----------------------------
let options = {
    titles: "My menu",
    items: ["item1", "item2"]
}

function showMenu({
    title = "Untitled", //Default Value 
    width: w = 100, 
    height: h=200, 
    items: [item1, item2],
}) {
    console.log(`${title} ${w}, ${h}`);
    console.log(item1);
    console.log(item2);
}


// -----------------------------
// Nested Destructuring
// -----------------------------
const songs = [
    {name: "Lucky You", singer: "Joyner", duration: 4.34},
    {name: "Just like you", singer: "NF", duration: 3.23},
    {name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33},
    {name: "Old Town Road", singer: "Lil Nas X", duration: 1.43},
    {name: "Cold Shoulder", singer: "Central Cee", duration: 5.23},
]

const [, , {singer: s}] = songs
// console.log(s);
// -----------------------------


// -----------------------------
// Destructuring Mixture
// -----------------------------
const data = {
    user: {
      id: 123,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      address: {
        city: "New York",
        country: "USA",
      },
      hobbies: ["Reading", "Painting", "Cooking"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
  };

// Extract data
const {
    user: {
        name, age, address: {city, country},
        hobbies,
        scores: {math, science, history},
        email,
    },
    products: [product1, product2, product3],
    settings: {
        darkMode,
        notifications: {
            email: emailNotificiation,
            sms: smsNotification,
            push: pushNotification,
        },
        language,
    },
 } = data;

 console.log(`Name: ${name}`);
 console.log(`Age: ${age}`);
 console.log(`Address: ${city}, ${country}`);
 console.log(`Hobbies: ${hobbies.join(", ")}`);
 console.log(`Math Score: ${math}`);
 console.log(`Science Score: ${science}`);
 console.log(`History Score: ${history}`);
 console.log(`Product 1: ${product1.name} - ${product1.price}`);
 console.log(`Product 2: ${product2.name} - ${product2.price}`);
 console.log(`Product 3: ${product3.name} - ${product3.price}`);
 console.log(`Dark Mode: ${darkMode}`);
 console.log(`Email Notificiation: ${emailNotificiation}`);
 console.log(`Push Notificiation: ${pushNotification}`);
 console.log(`SMS Notificiation: ${smsNotification}`);

