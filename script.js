let myDiscoveries = ["apple", "comb", "leftovers"]

const inputElement = document.getElementById("input-element")
const inputButton = document.getElementById("input-button")
const unorderedListElement = document.getElementById("unordered-list-element")

console.log(unorderedListElement)

inputButton.addEventListener("click", function(){
  myDiscoveries.push(inputElement.value)
  console.log(myDiscoveries)
})

for (let i=0; i < myDiscoveries.length; i++) {
  unorderedListElement.innerHTML += "<li>" + myDiscoveries[i] + "</li>"
}