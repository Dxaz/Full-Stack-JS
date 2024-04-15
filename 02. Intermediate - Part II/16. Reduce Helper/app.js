//
// -----------------------------
// 16. Reduce Helper 
// -----------------------------
// The reduce() method applies the reducer function to each element of an array,
// accumulating the results into a single value. It is often used to perform
// calculations or aggregations on array elements and simplify the array into a
// single value 
//-----------------------------

const numbers = [1,2,3,4,5]

const sum = numbers.reduce((prev, curr) => {
    console.log(`Previous: ${prev}`); 
    console.log(`Current: ${curr}`); 
    return prev + curr
},0)
console.log(sum);

const peoples = [
    {name: "Greg Dxaz", age: 19},
    {name: "Alex Mead", age: 29},
    {name: "Brian Giffin", age: 40},
];

const oldestAge = peoples.reduce((prev, current) =>current.age > prev ? current.age : prev ,0)
console.log(oldestAge);

const words = [
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "grape"
];

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0 + 1)
    return frequencyMap;
}, {})

console.log(wordFrequency);
// -----------------------------
// challenge given
