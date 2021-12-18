const convertFloor = (floor) => {
    if ( floor > -1 &&  floor < 13) {
        floor++;
        console.log(floor);
    } else if (floor == 13) {
        console.log('В Америке такого этажа не существует!');
    } else {
        console.log(floor);
    }
};

convertFloor(-1); // -1 
convertFloor(0); // 1
convertFloor(13); // В Америке такого этажа не существует!
convertFloor(14); // 14