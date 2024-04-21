// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular funciton
// --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arror function
// --> Print this message `Hello, m name is ${this.name} & I'm ${this.age} years old.`


const obj ={
    name: "Greg",
    age: 10,
    greetRegular: function () {
       return `Hello, my name is ${this.name} & I'm ${this.age} years old`
        
    },
    greetArrow: () => `Hello, my name is ${this.name} and I'm ${this.age} years old.`
}

console.log(obj.greetRegular());
console.log(obj.greetArrow());