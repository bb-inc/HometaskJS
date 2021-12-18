const p = document.createElement('p');
p.innerText = ('Это всего лишь текст');
p.classList = ('text');
document.body.appendChild(p);
const divAlert = document.createElement('div');
divAlert.innerText = ('А это сообщение об ошибке');
divAlert.classList = ('alert');
document.body.appendChild(divAlert);