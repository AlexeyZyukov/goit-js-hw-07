// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное 
//количество символов.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */}
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

const validationInputEl = document.querySelector('#validation-input');
//validationInputEl.classList.add('#validation-input.valid')
console.log(validationInputEl);
//console.log(validationInputEl.classList);

validationInputEl.addEventListener('blur', callbackFn);

function callbackFn(event) {
    let symbolQuantity = event.currentTarget.value;
    console.log(symbolQuantity.length);
    
  if (symbolQuantity.length === Number(validationInputEl.getAttribute('data-length'))) {
    validationInputEl.classList.add("valid");
    console.log(`${validationInputEl.getAttribute('data-length')} symbols are entered`)
  } else {
    validationInputEl.classList.add("invalid");
    console.log(`more or less then ${validationInputEl.getAttribute('data-length')} symbols was entered`)
    }
};