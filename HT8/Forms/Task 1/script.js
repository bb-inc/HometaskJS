'use strict';
let balanceSum = [0];
let incomeSum = [0];
let consSum = [0];
const onBtn = (e) => {
    let columnIncome = document.getElementById('columnIncome');
    let columnCons = document.getElementById('columnCons');
    let balance = document.getElementById('balance');
    let formElem = e.target.elements;
    let moneyVal = formElem['moneyVal'].value;
    if (formElem[1].checked == true) {
        balanceSum.push(Number(moneyVal));
        incomeSum.push(Number(moneyVal));
    }
    if (formElem[2].checked == true) {
        balanceSum.push(Number(-moneyVal));
        consSum.push(Number(moneyVal));
    }
    if (formElem[0].value == '') {
        alert('Вы ничего не ввели!')
    } else {
        let income = incomeSum.reduce((sum, item) => sum += item);
        let cons = consSum.reduce((sum, item) => sum += item);
        let bal = balanceSum.reduce((sum, item) => sum += item);
        balance.innerText = 'Баланс:' + bal + '$';
        columnIncome.style.height = income + 'px';
        columnIncome.innerText = 'Доход: ' + income + '$'
        columnCons.style.height = cons + 'px';
        columnCons.innerText = 'Расход: ' + cons + '$';
    }
    e.target.reset();
    e.preventDefault();
}
document.getElementById('formMoney').addEventListener('submit', onBtn);

// Сделал по приколу кнопку удаления блоков
// const onBtnDel = () => {
//     let columnIncome = document.getElementById('columnIncome');
//     let columnCons = document.getElementById('columnCons');
//     let balance = document.getElementById('balance');
//     columnIncome.style.height = 0 + 'px';
//     columnCons.style.height = 0 + 'px';
//     columnCons.innerText = '';
//     columnIncome.innerText = '';
//     balance.innerText = '';
//     e.preventDefault();
// }
// document.getElementById('btnDel').addEventListener('click', onBtnDel);