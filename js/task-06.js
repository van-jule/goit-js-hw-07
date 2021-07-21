const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
  console.log('Введено символов', event.target.value.length)

  if (+inputEl.dataset.length === event.target.value.length) {
    changeClass('valid', 'invalid')
    // inputEl.classList.add('valid');
    //         inputEl.classList.remove('invalid');
  } else changeClass('invalid', 'valid')
  // inputEl.classList.add('invalid');
  //     inputEl.classList.remove('valid');
}

const changeClass = (add, remove) => {
  inputEl.classList.remove(remove)
  inputEl.classList.add(add)
}
