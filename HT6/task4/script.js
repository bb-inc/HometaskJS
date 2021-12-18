'use strict';
const formBtnClick = (e) => {
    let formElements = e.target.elements[0];
    if (formElements.value == '') {
        formElements.focus();
    } else {
        console.log('Поле не пустое');
    }
    e.preventDefault();
}

document.forms[0].addEventListener('submit', formBtnClick);