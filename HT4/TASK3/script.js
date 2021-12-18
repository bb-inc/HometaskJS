let arrTopVal = [];
let arrLeftVal = [];
let arr = [];

const showMessage = (text, color, top, left) => {
    const div = document.createElement('div');
    div.classList = ('message');
    div.innerText = (text);
    div.style.backgroundColor = color;
    div.style.position = 'fixed';
    div.style.top = top + 'px';
    div.style.left = left + 'px';
    document.body.appendChild(div);
    arrTopVal.push(top);
    arrLeftVal.push(left);
    arr.push(div);
    for (i = 0; i < arr.length; i++) {
        if (arr.length > 3) {
            const delElem = arr.shift();
            delElem.remove(); // удаляю лишний элемент из массива где находятся все сообщения
        };
        if (arrTopVal.indexOf(arrTopVal[i]) !== arrTopVal.lastIndexOf(arrTopVal[i])) { // нахожу совпадающие значения top 
            let arrTrueTopVal = arrTopVal.filter(() => {
                return arrTopVal[i]; // создаю новый массив со всеми совпадающими значениями top
            });
            div.style.top = (top + 25 * arrTrueTopVal.length) + "px"; // изменяю позицию сообщения относительно top с учетом совпадающих значений
        };
        if (arrLeftVal.indexOf(arrLeftVal[i]) !== arrLeftVal.lastIndexOf(arrLeftVal[i])) { // нахожу совпадающие значения left
            let arrTrueLeftVal = arrLeftVal.filter(() => {
                return arrLeftVal[i]; // создаю новый массив со всеми совпадающими значениями left
            });
            div.style.left = (left + 25 * arrTrueLeftVal.length) + "px"; // изменяю позицию сообщения относительно top с учетом совпадающих значений
        };
    };
};

showMessage('Всем привет', 'yellow', 100, 50);
showMessage('Всем привет', 'red', 100, 50);
showMessage('Всем привет', 'green', 100, 50);
showMessage('Всем привет', 'blue', 100, 50);