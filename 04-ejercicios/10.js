let longitud = 20;

function crearArray(n) {
    if (n <= 0) {
        return [];
    }
    let array = [];
    for (let i = 0; i < n; i++)
        array.push(i)

    console.log(array)

    }

let resultado = crearArray(longitud);
console.log(resultado);