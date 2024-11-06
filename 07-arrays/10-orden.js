let numeros = [15, 10, -3];

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

let letras = ['z', 'a', 'd'];
letras.sort();
console.log(letras);

let conMayuscula = ['Z', 'a', 'd'];
conMayuscula.sort((a, b) => {
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if (alower < blower) {
        return -1;
    }
    if (alower > blower) {
        return 1;
    }
    return 0
});

console.log(conMayuscula);

let usuarios = [
    { edad:15, nombre:'Felipe' },
    { edad:25, nombre:'Nicolas' },
    { edad:13, nombre:'Poli' },
];

usuarios.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    }
    if (a.edad > b.edad) {
        return 1;
    }
    return 0
});
console.log(usuarios);