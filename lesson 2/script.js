// //Циклы 

//Цикл while
let i = 0;
while (i < 9) {
    console.log(i);
    i++;
}

// //Цикл do while
let result = '';
let i = 0;
do {
    i++;
    result = result + i;
} while (i < 5);
    console.log(result);

// //Цикл for
for (let i = 0; i < 10; i++) {  //используется для перебора элемента массива
    console.log(i);
}

// Задания
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(`number ${i}`);
    i++
}

let i = 1;
while (i < 1000) {
    if (i % 5 === 0) {
    console.log(i);
    }
    i++;
}


//МАССИВЫ

let arr = [1, 2, 3, 4, 5];
// let elem1 = arr[0];
for (let index = 0; index < arr.length; index++){
    console.log(arr[index]);
} 

let arr = [];
for (let index = 0; index < 10; index++){
    arr[index] = index * 10;
    console.log(arr)
}

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

let arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = [];
    for (let j = 0; j < 10; j++) {
        arr[i][j] = j;
    }
}

console.log(arr);

//Методы

let arr = [1, 7, 4, 5, 6];
let resoult = arr.join(','); //делает из массива строку
console.log(resoult);

arr.push(5, 23, 234, 76); // добавит к массиву 
console.log(arr);

const delElem = arr.pop();
console.log(arr, delElem);

const delElem1 = arr.shift(); //удаление первого элемента
console.log(arr, delElem1);

console.log(arr.unshift(100, -5, 25));

arr.reverse();
console.log(arr);

let arr = [1, 7, 4, 5, 6];
arr.sort();
console.log(arr);

let arr = [1, 7, 4, 5, 6];
const newArr = arr.concat([1, 2, 10, 20]);
console.log(newArr);

let arr = [1, 7, 4, 5, 6];
const newArr = arr.slice(0, 3);
console.log(newArr);

let arr = [1, 7, 4, 5, 6];
arr.splice(0, 1); //deleted
arr.splice(0, 0, 500, 700); //add 500,700
arr.splice(1, 1, 30); // замена 2-го элемента на 30
console.log(arr);


//ЗАДАНИЕ 1
let arr = [];
let sum = 0;
for (let i = 0; i < 6; i++){
    arr[i] = i * 5;
    sum += arr[i];
}
let result = sum / arr.length;
console.log(arr, result);

//ЗАДАНИЕ 2
let arr = [1, 3, 5, 7, 8, 9];
// let lastElem = arr.pop();
// console.log(lastElem);
console.log(arr[arr.length - 1]);




let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.indexOf(5)); // поиск элемента по его позиции (вотрая цифра - позиция с которой мы насинаем исакть) 
console.log(arr.lastIndexOf(1)); // пом=иск элемента с конца
console.log(arr.includes(5)) // ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

let findValue = arr.find(function (value) {
    if (value == 5) {
        return value;
    }
});
console.log(findValue);

// arr.forEach(function (value) { // перебор массива

// });

let arr = [1, 3, 5, 7, 8, 9];
const newMap = arr.map(function(value) {
    return value + 10;
});
console.log(newMap);

const result = arr.reduce(function(accum,value) {
    return accum + value;
}, 0);
console.log(result);

//Функции

function sum(a, b, c) {
    return a + b + c; 
}
// ИЛИ
const sum = (a, b, c) => { //стрелочная функции(сокращенный вид функций)
    return a + b +c;
}

// const sum = (a, b, c) => a + b +c; // если одна строчка функции
sum(1, 2, 3);
console.log(sum(1, 2, 3));