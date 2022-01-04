let pricesObj = {
    banana: 30,
    apple: 20,
    orange: 40
};

const sumPrices = (prices) => {
    let arrPrices = Object.values(pricesObj);
    let pricesSumCalc = arrPrices.reduce((sum, item) => {
        return sum += item;
    })
    console.log(pricesSumCalc);
};

sumPrices();
