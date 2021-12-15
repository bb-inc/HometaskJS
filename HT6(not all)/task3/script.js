'use strict';
const formBtnClick = (e) => {
    let formElements = e.target.elements;
    for (let i = 0; i < formElements.length; i++) {
        let chBox = document.querySelector('input[type=checkbox]');
        if (chBox.checked) {
            
        }
        console.log(formElements[i].value);
    }
    e.preventDefault();
}

document.forms[0].addEventListener('submit', formBtnClick);