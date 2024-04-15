// 1. Create a symbole provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object

let sym = Symbol("foo");
console.log(typeof sym);

let obj = {
    firstName: "alex",
    lastName: "mead"
}

obj[sym] = "some value of foo" 
console.log(obj);

for (let i in obj) {
    console.log(i);
}