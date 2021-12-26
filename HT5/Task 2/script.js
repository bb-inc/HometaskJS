let ol = document.createElement('ol');
ol.setAttribute('id', 'textBox');
document.body.appendChild(ol);
const onBtnAdd = (e) => {
    let li = document.createElement('li');
    li.innerText = ('Ты добавил текст');
    ol.appendChild(li);
};
const onBtnDel = (e) => {
    document.getElementById('textBox').lastChild.remove();
};
document.getElementById('add').addEventListener('click', onBtnAdd);
document.getElementById('delete').addEventListener('click', onBtnDel);

