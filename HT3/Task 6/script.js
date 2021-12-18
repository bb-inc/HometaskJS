// Пример
function convertType(value, toType) {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    }
    if (toType === 'number') {
        return Number(value);
    }
};
console.log(convertType('my string', 'number'));

// через switch
function convertType1(value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
    }
};
console.log(convertType1('my string', 'string'));


// expression
const convertType2 = function (value, toType) {
    if (toType === "boolean") {
        return Boolean(value);
    } else if (toType === "number") {
        return Number(value);
    } else if (toType === "string") {
        return String(value);
    }
};
console.log(convertType2('my string', 'boolean'));

// стрелочная 
const convertType3 = (value, toType) => {
    if (toType === "boolean") {
        return Boolean(value);
    } else if (toType === "number") {
        return Number(value);
    } else if (toType === "string") {
        return String(value);
    }
};
console.log(convertType3('my string', 'boolean'));