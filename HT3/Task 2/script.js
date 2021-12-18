// по простому
const pow = (a,b) => console.log(a**b);
pow(2,5);

// по непростому 
const pow = (a,b) => {
    let c = a;
    for (i = 1; i < b; i++) {
        if (b > 0 && b % parseInt(b) === 0) {}
        c*=a;
    } 
    console.log(c);
}
pow(2,5);