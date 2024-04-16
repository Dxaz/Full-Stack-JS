const p = document.querySelector('p')

// innerText
console.log(p.innerText);
//----
// change text
// const h1 = document.querySelector("h1");
// h1.innerText = "Changed"
//----
// change html 
const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Greg Waz Here</em>"
//----

// textContent
console.log(p.textContent);

// innerHTML
console.log(p.innerHTML);
