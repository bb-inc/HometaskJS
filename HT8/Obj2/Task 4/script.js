let product = {
    name: "John",
    price: 30,
    sold: false
};

let {name: nameObj, price: price, sold: sold} = product;
console.log(`${nameObj} ${price} ${sold}`);