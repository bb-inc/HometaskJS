let rectangle = {
    height: 10,
    width: 20,
    getArea() {
        let area = this.height * this.width;
        return area;
    }
};
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());