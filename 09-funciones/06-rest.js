// function suma(a, b) {
//     console.log(arguments);
// }

// console.log(1, 2, 3, 4)



const suma = (a, b, ...rest) => {
    console.log(rest);
}

console.log(1, 2, 3, 4)

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

logMsg('Servidor:', 'Error 1', 'Peticicion aceptada', 'socket activo')