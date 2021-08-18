// Write your code here!

const main = document.getElementById("main")
Element.classList.remove("main")

const newHeader = document.createElement("h1")

document.body.append(newHeader)

newHeader.classList.add("victory")

newHeader.textContent = "DEVIN is the champion"