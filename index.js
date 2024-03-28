//document.getElementById("count").innerText = 5;


let count=0;

function increment() {
    count++
    const countEl = document.getElementById('count-el');
    countEl.innerText = count;
    console.log(count);
}

function save() {
    console.log(count);
}