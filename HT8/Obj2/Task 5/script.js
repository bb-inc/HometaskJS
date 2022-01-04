let array = ['Tony', 'Stark', 1, 45, 2, 5, 34, 9, 11];
let [nameObj, surname, ...arr] = array;
let sumArr = arr.reduce((sum, item) => {
    return sum += item;
});
console.log(nameObj);
console.log(surname);
console.log(sumArr);
