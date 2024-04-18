// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------
// Creating Element
// const h1 = document.createElement("h1")
// const body = document.body
// h1.textContent = "Hello World"
// h1.classList.add("greetings")
// h1.classList.remove("greetings")
// body.appendChild(h1)
// console.log(h1);
// ------------------------------------
// const ul = document.querySelector('ul')
// const newLi = document.createElement("li")
// newLi.innerText = "I'm li tag"
// ul.appendChild(newLi)

// const firstLi = document.querySelector('li')
// // selector.insertBefore(what,where)
// ul.insertBefore(newLi, firstLi)
// ------------------------------------
// const firstP = document.querySelector("p")
// const i = document.createElement("i")
// i.innerText = "I'm Italics"
// i.style.color = "skyblue"
// firstP.insertAdjacentElement("beforeBegin",i)
// firstP.insertAdjacentElement("afterBegin",i)
// firstP.insertAdjacentElement("beforeEnd",i)
// firstP.insertAdjacentElement("afterEnd",i)
// ------------------------------------
// let section = document.querySelector("section")
// const i = document.createElement("i")
// i.innerText = "I'm Italics"
// i.style.color = "skyblue"

// const span = document.createElement("span")
// span.innerText = "Greg"
// span.style.color = "crimson"
// section.append(i,span);
// section.prepend(i,span);
// ------------------------------------
const newList = document.querySelector(".new-list")
const fourth = document.querySelector(".fourth")
newList.removeChild(fourth)
newList.remove()