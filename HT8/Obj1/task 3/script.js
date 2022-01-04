let circle = {
    radius: 40,
    color: 'pink',
    calculateCircumference() {
        let length = 2 * Math.PI * this.radius;
        console.log(length);
    }
};
circle.calculateCircumference();