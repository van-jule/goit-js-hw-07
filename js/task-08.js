const inputEl = document.querySelector('#controls input')

const btnCreateEl = document.querySelector('[data-action="render"]')

const btnClearEl = document.querySelector('[data-action="destroy"]')

const divContainer = document.querySelector('#boxes')

btnCreateEl.addEventListener('click', () => createBoxes(+inputEl.value))
btnClearEl.addEventListener('click', clearBoxes)

function clearBoxes() {
  divContainer.innerText = ''
}

function createBoxes(amount) {
  divContainer.innerText = ''

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div')
    divEl.style.width = 30 + i * 10 + 'px'
    divEl.style.height = 30 + i * 10 + 'px'

    divEl.innerText = `${i + 1}`

    divContainer.append(divEl)
    // divEl.setAttribute(width, 30);
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    console.log(red, green, blue)

    divEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    console.log(divEl.style.width)
  }
}
