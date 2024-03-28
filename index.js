//document.getElementById("count").innerText = 5;

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0;

function increment() {
    count++;
    countEl.textContent = count;
    console.log(count);
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
    console.log(count)
}