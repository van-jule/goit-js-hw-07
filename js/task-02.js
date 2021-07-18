// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

let ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredientsEl = document.querySelector('#ingredients')

// ingredientsEl.append(
//   ...ingredients.map(element => {
//     const ingredientItemEl = document.createElement('li')
//     ingredientItemEl.textContent = element
//     console.log(ingredientItemEl)
//     return ingredientItemEl
//   }),
// )

// ingredients.forEach((element, index, array) => {
//   const ingredientItemEl = document.createElement('li')
//   ingredientItemEl.textContent = element
//   array[index] = ingredientItemEl
// })

ingredients = ingredients.map(element => {
  const ingredientItemEl = document.createElement('li')
  ingredientItemEl.textContent = element
  return ingredientItemEl
})

ingredientsEl.append(...ingredients)
