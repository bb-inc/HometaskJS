'use strict';
const formBtnClick = (e) => {
    let formElements = e.target.elements;
    for (let i = 0; i < formElements.length; i++) {
        console.log(formElements[i].value);
    }
    e.target.reset();
    formElements['submit-form-btn'].disabled = true;
    e.preventDefault();
}

document.forms[0].addEventListener('submit', formBtnClick);