const inputEl = document.querySelector('#name-input')
console.log('inputEl', inputEl)

const spanEl = document.querySelector('#name-output')
console.log('spanEl', spanEl)

inputEl.addEventListener('input', event => {
  if (!event.target.value) {
    spanEl.innerText = 'незнакомец'
    return
  }
  spanEl.innerText = event.target.value
})
