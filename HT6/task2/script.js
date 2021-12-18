'use strict';
const formBtnClick = (e) => {
    let formElements = e.target.elements;
    formElements[0].value = "Abobus";
    e.preventDefault();
}

document.forms[0].addEventListener('submit', formBtnClick);