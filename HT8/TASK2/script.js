const addToTable = (name, age) => {
    document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.innerText = name;
    const tdAge = document.createElement('td');
    tdAge.innerText = age;
    const trUser = document.createElement('tr');
    trUser.appendChild(tdName);
    trUser.appendChild(tdAge);
    return document.getElementsByTagName('tbody')[0].appendChild(trUser);
}

const addNewItemClick = (e) => {
    document.getElementsByClassName('modal')[0].classList.toggle('displayNone');
}

const addClick = (e) => {
    e.preventDefault();
    const form = document.forms[0];
    if (Number(form.elements[1].value)<18) {
         alert('Иди НАХУЙ пес');
    } else {
        addToTable(form.elements[0].value, form.elements[1].value);
    }
    document.forms[0].reset()
    document.getElementsByClassName('modal')[0].classList.toggle('displayNone');
}

const cancelClick = (e) => {
    e.preventDefault();
    document.forms[0].reset();
    document.getElementsByClassName('modal')[0].classList.toggle('displayNone');
}
document.getElementById("addNewItem").addEventListener('click', addNewItemClick);
document.getElementsByName("addBtn")[0].addEventListener('click', addClick);
document.getElementsByName("cancelBtn")[0].addEventListener('click', cancelClick);