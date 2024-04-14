//
// -----------------------------
// 9. For in Loops
// -----------------------------
// The "for ...in" loop in JavaScript is used to iterate over the enumerable
// properties of an object. It is a way to loop through the keys (property
// names) of an object
//-----------------------------
// for (let key in object) {...}

let person = {
    name: "Greg",
    age: 19,
    gender: "male"
}

for (let keys in person) {
    console.log(keys, person[keys]);
}

let list = ['one', 'two', 'three', 'four']

for (let index in list) {
    console.log(`${index}, ${list[index]}`);
}
//-----------------------------
// challenge given
