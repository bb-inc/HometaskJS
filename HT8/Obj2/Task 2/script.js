let ul = document.getElementsByTagName('li');
let arr = Array.from(ul);
let newArr = arr.map((elem, number) => number + 1 + '.' + ' ' + elem.innerText );
console.log(newArr);