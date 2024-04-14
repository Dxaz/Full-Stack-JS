//
// -----------------------------
// 6. Rest Operator
// -----------------------------
// The rest parameter syntax allows a function to accept an
// Indefinite number of arugments as an array, providing a 
// way to represent variadic functions in JavaScript
// -----------------------------
// 
function user(x, ...userData) {
    console.log(x);
    console.log(userData);
}

user("Greg", 19, "Programmer", "idk")

function person(firstName, lastName, ...hobbies) {
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Hobbies:", hobbies);
}

person("Greg", "Dxaz", "football", "singing")
// challenge given
