// 1. Check the innerText of "first" element
let first = document.querySelector(".first")
console.log(first.innerText)
first.innerText = "This is the first text and I'm changing it via javascript"

// 2. Check the textContent of "second" element
let second = document.querySelector(".second")
console.log(second.textContent);
second.textContent = "This is the new text content"

// 3. Check the innerHTML of "third" element
let third = document.querySelector(".third")
console.log(third.innerHTML);
third.innerHTML = "<span>This is now how things work. I'm in control. I do what <em>I</em> <h1>WANT!!!!!</h1></span>"
