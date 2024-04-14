// 1. Your task is to use array destructuring to extract the first three colors
// from the colors array and assign them to seperate variables named color1,
// color2, color3

// 2. After extracting the colors, log each variable's value to the console

const colors = ["red", "green", "blue", "yellow", "orange"]

const [color1, color2, color3, ...colors4] = colors

console.log(color1, color2, color3, ...colors4);


// 3. Your task is to use object destructuring to extract the name, age and
// county properties from teh person object.

// 4. After extracting the properties, log each variable's value to the console

const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA"
}


const [name, age, country] = person
console.log(name);
console.log(age);
console.log(country);