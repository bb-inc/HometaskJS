// Через рекурсию
function printNumbers(from, to) {
    setTimeout(function repit() {
        console.log(from);
        if (from < to) {
            setTimeout(repit, 1000);
        }
        from++;
    }, 1000);
}
printNumbers(5, 10)

// Без рекурсии
// function printNumbers(from, to) {
//     let stopSetInt = setTimeout(() => {
//         console.log(from);
//         if (from == to) {
//             clearInterval(stopSetInt);
//         };
//         from++;
//     }, 1000);
// }