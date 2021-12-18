'use strict';
const formBtnClick = (e) => {
    let chBox = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < chBox.length; i++) {
        if (chBox.checked) {
            console.log(chBox[i].value);
        }
        e.preventDefault();
    }
}

document.forms[0].addEventListener('submit', formBtnClick);