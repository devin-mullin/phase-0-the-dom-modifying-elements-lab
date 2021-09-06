// Write your code here!

const main = document.getElementById("main")
main.remove("main")


const newHeader = document.createElement("h1") 

const victory = document.createElement("victory")

newHeader.append(victory)

document.body.append(newHeader)


victory.textContent = "DEVIN is the champion"