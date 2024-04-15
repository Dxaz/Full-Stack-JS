//
// -----------------------------
// 18. Sets 
// -----------------------------
// Set is a built-in data structure introduced in (ES6) that represents a
// collection of unique values. Unlike arrays, Set allows you to store only
// unique values, which means duplicate values are automatically removed. Each
// value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and
// quickly check for the existence of a specific value.
// -----------------------------
// const initialValues = [1,2,2,3,3,3,3];
// const mySet = new Set(initialValues);
const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");

console.log(mySet.has("banana")); // true
console.log(mySet.has("Greg")); // false

// console.log(mySet.delete("banana"));
// mySet.clear();

console.log(mySet);

for (let item of mySet) {
    console.log(item);
}

// -----------------------------
// challenge given