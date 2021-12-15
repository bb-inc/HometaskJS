function doubleLatter(str) {
    for (let i=0; i<str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
        return false; 
      }
    }
  return true;
}

let arrLi = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
let ol = document.createElement('ol');
document.body.appendChild(ol);
for (let i = 0; i < arrLi.length; i++) {
    let li = document.createElement('li');
    li.innerText = (arrLi[i]);
    if (i % 2 == 0) {
        li.classList.add('even');
    }  else  {
        li.classList.add('odd');
    } if (doubleLatter(arrLi[i]) == false) {
        li.classList.add('whiteText');
    }
    ol.appendChild(li);
}

