//Challenge 0

let nameInfo = {
    surname: 'Berdnikov',
    name: 'Bogdan',
    patronymic: 'Sergeevich'
};
console.table({nameInfo});
console.group('Facts about Me');
console.log('I drink coffee in the morning');
console.log('I have never tried drugs');
console.log('I LOVE MATVEY!');
console.groupEnd();

//Challenge 1

//Сортировка при помощи пузырька
const sorted = bubbleSort(Array(10).fill(null).map(() => Math.floor(Math.random() * 1000) - 200));
console.log(sorted);
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const top = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = top;
            }
        }
    }
    return arr;
};

//Challenge 2

function fib(n) {
    const value = [0, 1];
    for (let i = 2; i < n; i++) {
        value.push(value[i - 2] + value[i - 1]);
    }
    return value;
};
console.log(fib(103)); // в консоле ограничение в 100 чисел :(