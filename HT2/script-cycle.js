//TASK 1
let a = 0;
while (a <= 50) {
    console.log(a);
    a++;
};

//TASK 2
for (let b = 1; b <= 100; b++) {
    if (b % 2 == 0) {
        console.log(b);
    }
};

//TASK 3
let arr = [];

for (let i = 0; i < 21; i++) {
    arr[i] = i;
};

function arrSum() {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // alert('Сумма=' + sum); //мешает
    console.log('Сумма=' + sum);
};

arrSum();

//TASK 4
let z = 2;
let step = 1;
while (step < 8) {
    z *= 2;
    step++;
};
console.log('2 в степени 8 = ' + z);

//TASK 5

function max(n) {
    let a = n.toString();
    let b = a.split('');
    return Math.max.apply(null, b);
};
console.log(max(234139123));