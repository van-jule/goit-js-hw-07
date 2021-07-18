const inputEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text")


console.log('textEl.style.fontSize', textEl.style.fontSize)

inputEL.addEventListener("input", onInputRange);

function onInputRange(event) {
    console.log(event);
    textEl.style.fontSize = event.target.value + 'px'
    console.log('textEl.style.fontSize', textEl.style.fontSize)

}

