//TASK-ARRAY 4

let styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл')
console.log(styles);
styles.splice(styles.length - 2, 1, 'Классика');
console.log(styles);
const styleFirstValue = styles.shift();
// alert(styleFirstValue); //мешает
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);

// Счетчик суммы массива при вводе числа 15
let val = [];
while (true) {
    val.push(prompt('Введите число'));
    if (val[val.length - 1] == 15) {
        let indexSum = 0;
        for (indexVal of val) {
            indexSum += parseInt(indexVal);
        }
        console.log(indexSum);
        break;
    }
}