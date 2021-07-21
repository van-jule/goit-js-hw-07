// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const categoriesEl = document.querySelector("#categories")
const arrayCategoriesEl = categoriesEl.querySelectorAll(".item");

 
function showQuantityOfCategories(){
    console.log(`В списке ${arrayCategoriesEl.length} категории.`)
}
 
showQuantityOfCategories();


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categoryTitlesEl = document.querySelectorAll('.item h2');

categoryTitlesEl.forEach(element => {
    console.log(`Категория: ${element.textContent}`);
});


const sublistEl = document.querySelectorAll('li.item ul');

sublistEl.forEach(element => {
    console.log(`Количество элементов: ${element.children.length}`);
});

