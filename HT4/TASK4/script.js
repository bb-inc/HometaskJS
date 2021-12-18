let arr = [];
let sum = 0;
const ul = document.createElement('ul')
document.body.appendChild(ul);

function listAdd() {
    for (let i = 0; i < Infinity; i++) {
        arr[i] = prompt('Введите число');
        if (arr[i] === null || arr[i] === '') {
            alert('Процесс прерван');
            break
        } else {
            sum = +arr[i] + sum;
            let li = document.createElement("li");
            li.innerText = (sum);
            ul.append(li);
        }
    }
}

listAdd();