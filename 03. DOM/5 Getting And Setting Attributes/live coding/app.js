const a = document.querySelector("a")
const input = document.querySelector("input")

// href
console.log(a.href);
a.href = "https://youtube.com"
a.href="https://google.com/"

// value
console.log(input.value);
// input.value = "value"
// input.placeholder = "please provide a strong password"

// type
// input.type ="password"
console.log(input.type);

// getAttribute(attrName)
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, value)
input.setAttribute("placeholder", "Password")
input.setAttribute("type", "password")


