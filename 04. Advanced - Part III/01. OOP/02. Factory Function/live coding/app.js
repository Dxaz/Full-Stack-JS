// A factory function is a type of function that is used to create an return
// objects. It's a design pattern that provides an alternative way to create
// objects compared to using constructors and the new keyword.

function name(params) {
    return {}
}

// why factory function instead of objects
let huxn = {
    firstName: "HuXn",
    lastName: "WebDev",
    fullName: function () {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} & I
        love Javascript`); 
    }
};

let alex = {
    firstName: "Alex",
    lastName: "Mead",
    fullName: function () {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} & I
        love Javascript`); 
    }
};

function createPerson(firstName, lastName, pl) {
    return {
        firstName,
        lastName, 
        pl,
        intro: function () {
            console.log(
            `Hello my name is ${this.firstName} ${this.lastName}, & I love ${this.pl}`
        );
        }
    }
}

const john = createPerson("John", "Doe", "Python");
const greg = createPerson("Greg", "WebDev", "Golang")
john.intro()
greg.intro()