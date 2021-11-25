// TASK 1
let a = 3;
let b = 5;
console.log(a, b);
[b, a] = [a, b];
console.log(a, b);

//TASK 2
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrSum = arr[0] + arr[2] + arr[5];
console.log(arrSum);

//TASK 3
function func() {
    let a = 3;
    let b = 5;
    console.log(a, b);
    [b, a] = [a, b];
    console.log(a, b);
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrSum = arr[0] + arr[2] + arr[5];
    console.log(arrSum);
    let obj = {
        firstValue: a,
        secondValue: b,
        sum: arrSum,
    }
    console.log(obj);
}

func();