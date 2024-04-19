// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener("keypress", (e)=>console.log("Key Pressed"))
// input.addEventListener("keyup", (e)=>console.log("Key Up"))
// input.addEventListener("keydown", (e)=>console.log("Key Down"))


// Useful properties and methods
input.addEventListener('keypress', (e) => {
    console.log(e.keyCode)
    console.log(e.Code)
    console.log(e.ctrlKey)
    console.log(e.shiftKey)
})