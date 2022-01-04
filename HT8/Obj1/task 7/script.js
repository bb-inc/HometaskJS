let selfGeneratedUser = {
    getInfo() {
        let name = prompt('Введите имя: ');
        if (name == '' || name == null) {
            alert('Вы не заполнили поле')
        } else {
            selfGeneratedUser.name = name;
        };
        let email = prompt('Введите email: ');
        if (email == '' || email == null) {
            alert('Вы не заполнили поле')
        } else {
            selfGeneratedUser.email = email;
        };
        let phone = prompt('Введите телефон: ');
        if (phone == '' || phone == null) {
            alert('Вы не заполнили поле')
        } else {
            selfGeneratedUser.phone = phone;
        };
    },
    introduce() {
        if (selfGeneratedUser.hasOwnProperty('name') == true) {
            alert(`Ваше имя: ${this.name}`);
        }
        if (selfGeneratedUser.hasOwnProperty('email') == true) {
            alert(`Ваш email: ${this.email}`);
        }
        if (selfGeneratedUser.hasOwnProperty('phone') == true) {
            alert(`Ваш телефон: ${this.phone}`);
        }
    }
}
selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();