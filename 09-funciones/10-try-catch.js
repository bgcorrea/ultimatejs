function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parametro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Elemento ${el} no es numero`)
        }
        return acc + el;

    })
}

try {
    console.log(sumaTodo([1, 2, NaN, 'hola mundo']));
} catch(error) {
    console.log(error.message)
}

console.log('despues del try catch');

// sweetalert2.github.io

