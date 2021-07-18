let spanEl = document.querySelector('#value');
let counterValue = Number(spanEl.innerText);

let btnDecrement = document.querySelector('[data-action="decrement"]')
console.log(btnDecrement);

let btnIncrement = document.querySelector('[data-action="increment"]')
console.log(btnIncrement);

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);


function increment() {
    counterValue += 1;
    spanEl.innerText = counterValue;
}

function decrement() {
    counterValue-=1;
    spanEl.innerText = counterValue;
}