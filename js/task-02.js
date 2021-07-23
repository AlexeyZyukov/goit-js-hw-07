"use strict"

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст 
//отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
//для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = document.querySelector("#ingredients");
  //console.log(listOfIngredients);
const ingredientsMarkup = createListOfIngredients(ingredients);
  //console.log(ingredientsMarkup);
listOfIngredients.append(...ingredientsMarkup);
  console.log(listOfIngredients);

function createListOfIngredients(items) {
  return items.map(item => {
    const liEl = document.createElement('li');
    liEl.textContent = item;
      //console.log(liEl);
    return liEl;
  }); 
}




//==========вариант 1 - wrong====================
// const addListOfIngredients = items => {
//   return items.map(item => {
//   const liEl = document.createElement('li');
//   liEl.textContent = item;
//   listOfIngredients.append(liEl);
//   return liEl;
//   });
// }
// addListOfIngredients(ingredients);
//console.log(addListOfIngredients(ingredients));

//====================================================================
// const addIngredients = ingredients.map(item => {
//   const liEl = document.createElement('li');
//   liEl.textContent = item;
//   listOfIngredients.append(liEl);
//   return liEl;
// });
// console.log(addIngredients);

// const listOfIngredients = document.querySelector("#ingredients");
// const newElem = document.createElement('li');
// newElem.textContent = (ingredients[0]);
// listOfIngredients.append(newElem);
// console.log(listOfIngredients);

// const addItemToList = (item, text) => {
//   let addItem = document.createElement(item);
//   addItem.textContent = text;
//   listOfIngredients.append(addItem);
// }
// addItemToList("li", ingredients[0]);



// const element = [];
// const addElemToArray = function (array, elType) {
//   array.forEach(element)
//   {
//     element.document.createElement(elType);
//     addElement.textContent = element;
//     listOfIngredients.append(addElement);
//   };
// };
// addElemToArray(ingredients, "li")

// const addElemToArray = (array, elType) => array.forEach((element) => {
//   element.document.createElement(elType);
//   addElement.textContent = element;
//   listOfIngredients.append(addElement);
// });
// addElemToArray(ingredients, "li")


// const list = document.querySelector(".list");
// console.log('list', list);


// const addItemToList = (item, text) => {
//   let addItem = document.createElement(item);
//   addItem.textContent = text;
//   list.append(addItem);
// }
// addItemToList("li", "Картошка");


