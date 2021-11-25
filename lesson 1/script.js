// use strick - ???

//Переменные
//var - устаревший способ задания переменных 
//let - можем перезаписывать переменную
//const - не изменная переменная
//у const и let область видимости блочная (доступна внутри блока), у var функциональная область видимости (доступна везде) 

let num = 5.5;
let str = 'string';
let flag = false;
let typeNull = null; //переменная ссылается ни на что
let typeUndef; // значение перменной не определено
let typeSymbol = Symbol('symbol');
let obj = {};
let bigNum = 1276381273n; // переменная для чимел имеющих большкю длину (в конце обязательно ставится n)
let arr = [312, 123, 133] // в массив желательно помещать однотипные данные!!!!!!

// sayHello();

// // function decloration (вызов функции до определения)
// function sayHello() {
//     alert('Hello world')
// }


// // function expreaain (вызов функции только после инициализации переменной)
// const sayHello = function () {
//     alert('Hello world')
// };

// typeof по3воляет определить тип переменной

console.log(typeof num)
console.log(typeof typeUndef)
console.log(typeof flag)
console.log(typeof typeSymbol)
console.log(typeof obj)
console.log(typeof arr)
console.log(typeof str)
console.log(typeof bigNum)
console.log(typeof typeNull)




//ОПРЕРАТОРЫ
// - + * /
// оператор % помогает вывсти остаток
// возведение в степень 32 ** 2 (32 во 2 степени)
// && - и
// || - или
// ! - не
// ++ - увеличение значения на 1 (1++ получится 2, 1-- отнимет)
// += 
// -= 

let age = 19;
if (age >= 16 && age <= 18) {
    console.log('скоро старость')
} else {
    console.log('gg')
}

// сокращенная версия if и else

age > 14 ? console.log(">14") : age < 14 ? console.log('<14') : console.log('14') // : - в противном случае 




// // Взаимодействие с пользователем
// alert('UwU')
// // let value = prompt('Who?', "boo");
// let aasd = confirm('Да или Нет');

// let count = prompt('Введите число');
// if (count <= 10 || count >= 25) {
//     console.log('не находится')
// } else {
//     console.log('находится')
// }

let password = prompt('Password');
let currentPassword = ('bbs21645112');
if (password === currentPassword) {
    alert('Пароль верен')
} else if (password === null || password === '') {
    alert('Действие отменено')
} else {
    alert('Пароль неверен')
}

