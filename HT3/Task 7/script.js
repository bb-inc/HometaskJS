const transformArray = (arr, index1, index2, adding) => {
    arr = arr.map(function(el) { return el + adding}); 
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    console.log(arr);
};

transformArray(['человек не ', 'собака не ', 'негр ', 'кошка не '], 2, 3, 'обезьяна');
// на всякий случай осуждаю расизм!)