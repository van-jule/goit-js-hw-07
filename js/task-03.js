// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector("#gallery");
galleryListEl.classList.add('gallery-list');


// images.forEach(element => {
//     const imageItemEl = document.createElement('li');
// const imageEl = document.createElement('img');
//     imageEl.src = element.url;
//         imageEl.alt = element.alt;

//     imageItemEl.appendChild(imageEl);
//         console.log(imageItemEl);
// galleryListEl.appendChild(imageItemEl)

// });


const createGalleryListEl = images.map(image => {

//         const imageItemEl = document.createElement('li');
// const imageEl = document.createElement('img');
//     imageEl.src = option.url;
//         imageEl.alt = option.alt;
//     imageItemEl.appendChild(imageEl);
//         console.log(imageItemEl);

    const imageItems = `<li class='image-item'><img src="${image.url}" alt = "${image.alt}" width=200></li>`;
    return imageItems;

})


    galleryListEl.insertAdjacentHTML('beforeend', createGalleryListEl.join(' '));


// console.log(galleryListEl);

// galleryListEl.append(...elements)



// const elements = images.map(option => {

//         const imageItemEl = document.createElement('li');
// const imageEl = document.createElement('img');
//     imageEl.src = option.url;
//         imageEl.alt = option.alt;
//     imageItemEl.appendChild(imageEl);
//         console.log(imageItemEl);

//     // return galleryListEl.insertAdjacentHTML('beforeend', `<li><img scr="${option.url}" alt = "${option.alt}" width = 200></li>`)
    
//     return imageItemEl;
// })
// // console.log(elements);

// galleryListEl.append(...elements)