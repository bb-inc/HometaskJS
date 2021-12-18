const sumNum = (n) => {
    do {
        arr = Array.from(String(n), Number);
        var sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        n = sum
    } while (sum > 9)
    console.log(n);
}

sumNum(1234);

