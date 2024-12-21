'use strict';


const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.parentElement.appendChild(document.createElement('label'));
    input.nextElementSibling.classList.add('field-label');
    input.nextElementSibling.setAttribute('for', input.id);
    input.nextElementSibling.textContent = input.name.toUpperCase();
    input.setAttribute('placeholder', input.name);
})
// write code here
