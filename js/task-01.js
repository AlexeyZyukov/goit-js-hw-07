"use strict"

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента(тега h2) и количество элементов в категории 
//(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesListEl = document.querySelectorAll('.item')
const showNumbersOfCategories = element => `В списке ${element.length} категории.`
console.log(showNumbersOfCategories(categoriesListEl));

const showCategories = element => element.forEach(el =>
    console.log(`Категория: ${el.querySelector(`h2`).textContent}. 
Количество элементов: ${el.querySelectorAll(`li`).length}.`))
showCategories(categoriesListEl);

// const ulAll = document.querySelectorAll(".item");
// console.log(`В списке ul#categories ${ulAll.length} категории.`);
// console.log('ulAll', ulAll);

// const ulCategories = document.querySelector('ul');
// console.log('ulCategories', ulCategories);
// console.log('ulCategories.children', ulCategories.children);
// console.log('ulCategories.children[]', ulCategories.children[0]);

//console.log(ulAll.children[0]);



// const ulAllItemsQuantity = ulAll.length;
// console.log(ulAllItemsQuantity);

//const headerValue = document.querySelector(".pets");
//const headerValue = document.querySelector('h2');
// console.log(headerValue.textContent);
