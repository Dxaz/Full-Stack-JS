// ----------- BAD WAY-----------
// const secondBtn = document.querySelector(".second-btn")
// secondBtn.onclick = function() {
//     console.log("Greg was here");
// };


// ----------- GREAT WAY-----------
// const best = document.querySelector(".best")

// function greetings(){
//     console.log("Hello World");
// }

// best.addEventListener("click", () => console.log("Yellow"))

// ----------- Event (e) Object -----------
const form = document.querySelector('form')
const input = document.querySelector("input")
form.addEventListener('input', (event)=>{
    event.preventDefault()
    console.log(event.data);
})