// Create a function which will take 
// unlimited amount of parameters & 
//log all of that params to the console.
const element = []

function unlimited(...unlimitedParams) {    
    return element.push(...unlimitedParams)
}

for (let i = 0; i < 1000; i++) {
    unlimited(i)
}

console.log(element);