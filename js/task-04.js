let spanEl = document.querySelector('#value')
let counterValue = Number(spanEl.innerText)

let btnDecrement = document.querySelector('[data-action="decrement"]')
console.log(btnDecrement)

let btnIncrement = document.querySelector('[data-action="increment"]')
console.log(btnIncrement)

btnDecrement.addEventListener('click', OnClickDecrement)
btnIncrement.addEventListener('click', OnClickIncrement)

function OnClickIncrement(evt) {
  counterValue += 1
  spanEl.innerText = counterValue
}

function OnClickDecrement(evt) {
  counterValue -= 1
  spanEl.innerText = counterValue
}
