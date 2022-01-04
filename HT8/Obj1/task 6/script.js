let newObj = {};
const isEmpty = (obj) => {
    for( let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(newObj));