let punto = {
    x: 10,
    y: 15,
};

let clonePunto = Object.assign({}, punto, {z: 20, x: 1});
console.log(punto, clonePunto);

let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto);

let copia3 = {...punto};
console.log(punto, copia3);

let copia4 = {};
for (let llave in punto) {
    copia4[llave] = punto[llave];
}

console.log(copia4)