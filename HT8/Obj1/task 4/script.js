let message = {
    text: '',
    showMessage() {
        alert(this.text);
    },
    setMessage(string) {
        this.text = string;
    }
};
message.setMessage('Pipilapup');
message.showMessage();