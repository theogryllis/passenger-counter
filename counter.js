let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count++
    countEl.textContent = count
}

function save() {
    
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    countEl.textContent = 0
    count = 0
    saveEl.textContent = "Previous entries: "
}












let name = "Theo"
let greeting = "Hi, my name is "
let myGreeting = greeting + name + "."
console.log(myGreeting)









