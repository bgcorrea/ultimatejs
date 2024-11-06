let obj1 = { id:1, name: 'chanchito'};
function crearCopia(obj) {
    let copia = {}
    for (let i in obj) {
        copia[i] = obj[i]
    }
    return copia

}

let obj2 = crearCopia(obj1);
console.log(obj1, obj2)