'use strict';
const formBtnClick = (e) => {
    let formElements = e.target.elements;
    console.log('Имя:', formElements[0].value);
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'checkbox' && formElements[i].checked === true) {
            console.log('Checkbox cheked:', formElements[i].value,);
        };
    };
    e.preventDefault();
};

document.forms[0].addEventListener('submit', formBtnClick);