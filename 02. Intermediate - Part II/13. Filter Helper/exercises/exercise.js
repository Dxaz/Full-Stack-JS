// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater than 18

const ages = [32,33,16,40];

function checkAdults(age) {
    return age > 18
}

console.log(ages.filter(checkAdults));
// ------------------------------
//
// 1. Iterate over "words" array
// 2. Print only those words which length is greater than 6

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const bigWords = (word) => word.length > 6

console.log(words.filter(bigWords));