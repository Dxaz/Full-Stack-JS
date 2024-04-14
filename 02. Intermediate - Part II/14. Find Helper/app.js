//
// -----------------------------
// 14. Find Helper
// -----------------------------
// The find() method is another build-in array helper in JavaScript that allows
// you to find the first element in an array that matches a specific condiiton.
// It returns the value of the first element that satisfies the given testing
// function, or undefined if no element is found.
// -----------------------------
const peoples = [
    {name: "greg", age: 17},
    {name: "john", age: 18},
    {name: "alex", age: 20},
    {name: "jimmy", age: 30},
    {name: "alex", age: 30},
];

const resp = peoples.find(person => person.name === "alex");
console.log(resp);

const posts = [
    {id: 1, content: "Good Post"},
    {id: 2, content: "Funny Post"},
    {id: 3, content: "Sad Post"},
]

const postRes = posts.find(post => post.content === "Funny Post")
console.log(postRes);
// -----------------------------

// challenge given