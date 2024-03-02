const button = document.getElementById("counter");
const counter = document.getElementById("total");

let COUNTER = parseInt(counter.innerHTML);

function increaseCounter() {
    COUNTER++;
    counter.innerHTML = COUNTER;
}