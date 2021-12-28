function* getEven (from, to) {
    for (let i = from; i <= to; i++) {
        if (i % 2 == 0) yield i;
    }; 
};

let results = getEven(2,10);
console.log(results.next().value);
console.log(results.next().value);
console.log(results.next().value);