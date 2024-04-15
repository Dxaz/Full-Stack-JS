//
// -----------------------------
// 12. Maps
// -----------------------------
// The map() method creates a new array populated with the results of calling a
// provided function on every element in the calling array.
//-----------------------------
let numbers = [1,2,3,4,5]
let double = numbers.map(num => num * 2)

console.log(double);

let peoples = [
    {firstName: "Macom", lastName: "Reynolds"},
    {firstName: "Kaylee", lastName: "Frye"},
    {firstName: "Jayne", lastName: "Cobb"},
]

const results = peoples.map(person => {
    return [person.firstName, person.lastName];
});

console.log(results);
//-----------------------------
// challange given