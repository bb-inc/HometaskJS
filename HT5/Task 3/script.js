const drawFigure = (type, color, top, left, width, height) => {
    let div = document.createElement('div');
    div.style.background = color;
    div.style.position = "absolute";
    div.style.top = top + "px";
    div.style.left = left + "px";
    if (type == "прямоугольник") {
        div.style.width = width + "px";
        div.style.height = height + "px";
        document.body.appendChild(div);
    }
    if (type == "квадрат") {
        div.style.width = width + "px";
        div.style.height = width + "px";
        document.body.appendChild(div);
    }
    if (type == "круг") {
        div.style.borderRadius = '50%';
        div.style.width = width * 2 + "px";
        div.style.height = width * 2 + "px";
        document.body.appendChild(div);
    }
}

window.addEventListener('keydown', function (e) {
    if (e.code == "KeyQ") {
        return drawFigure(`круг`, `red`, 100, 200, 40);
    }
    if (e.code == 'KeyW') {
        return drawFigure(`квадрат`, `green`, 100, 400, 100);
    }
    if (e.code == "KeyE") {
        return drawFigure(`прямоугольник`, `black`, 100, 600, 100, 200);
    }
});
