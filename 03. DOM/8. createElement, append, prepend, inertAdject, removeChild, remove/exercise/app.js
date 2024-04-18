// createElement()
const h1 = document.createElement("h1")
h1.innerText = "InnerText"
// append()
const body = document.querySelector("body")
body.append(h1)
// prepend()
const ul = document.createElement("ul")
const liTwo = document.createElement("li")
const li = document.createElement("li")
li.innerText = "I was put second"
liTwo.innerText = "I was put first"
ul.appendChild(liTwo)
body.append(ul)
ul.prepend(li)


/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const liThree = document.createElement("li")
liThree.innerText = "adjacentElement"
li.insertAdjacentElement("beforeBegin", liThree)
li.insertAdjacentElement("afterend", liThree)
li.insertAdjacentElement("beforeEnd", liThree)
li.insertAdjacentElement("afterEnd", liThree)

// removeChild()
ul.removeChild(liThree)
// remove()
ul.remove()
