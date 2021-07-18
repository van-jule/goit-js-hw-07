// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const categoriesEl = document.querySelector("#categories")
// console.log('categoriesEl:', categoriesEl);

const arrayCategoriesEl = categoriesEl.querySelectorAll(".item");
// console.log('arrayCategoriesEl:', arrayCategoriesEl);

 
function showQuantityOfCategories(){
    console.log(`В списке ${arrayCategoriesEl.length} категории.`)
}
 
showQuantityOfCategories();




// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categoryTitlesEl = document.querySelectorAll('.item h2');
// console.log(categoryTitlesEl);

categoryTitlesEl.forEach(element => {
    console.log(`Категория: ${element.textContent}`);
});


const sublistEl = document.querySelectorAll('li.item ul');
// console.log('sublistEl', sublistEl);

sublistEl.forEach(element => {
    console.log(`Количество элементов: ${element.children.length}`);
});



// arrayCategoriesEl.forEach(element => {
//     console.log(`Категория: ${element.firstElementChild.textContent}`);
//     console.log(`Категория: ${element.lastElementChild.children.length}`);

// });


