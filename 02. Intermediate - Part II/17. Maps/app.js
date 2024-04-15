//
// -----------------------------
// 17. Maps 
// -----------------------------
//  Map is a built-in data structure introduced in (ES6) that allows you to
//  store key-value pairs where both the keys and values can be of any data
//  type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to
// strings and symbols, Map allows you to use any data type as keys, including
// numbers, booleans, objects, and even other Map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as
// they were inserted, while object keys may not be guaranteed to be in a
// specific order.

// -> Iteration: Map provides built-in methods for easy iteration over its
// elements.

//-----------------------------
const map = new Map()

const keyOne = "string";
const keyTwo = {};
const keyThree = function () {}

map.set(keyOne, "Value of key one")
map.set(keyTwo, "Value of keyTwo");
map.set(keyThree, "Value of keyThree");

console.log(map.values().next());
console.log(map.keys());
console.log(map.delete(keyTwo));
console.log(map.size);
console.log(map);


// -----------------------------
// Iterate over key and values of a map
// -----------------------------

for (let [key, value] of map) {
    console.log(`${key} -- ${value}`);
}

//
// -----------------------------
// Iterate over key of a map
// -----------------------------
for (let key of map.keys()) {
    console.log(`${key}`);
}

//
// -----------------------------
// Iterate over values of a map
// -----------------------------
for (let values of map.values()) {
    console.log(`${values}`);
}