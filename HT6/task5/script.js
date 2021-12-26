'use strict';

const formBtnClick = (e) => {
    let formElements = e.target.elements;
    formElements['number'].setAttribute('maxlength', '13');
    let infoObj = {
        name: formElements['username'].value,
        surname: formElements['surname'].value,
        number: formElements['number'].value,
        message: formElements['message'].value,
    };
    console.log({
        infoObj
    });
    e.preventDefault();
};

document.forms[0].addEventListener('submit', formBtnClick);