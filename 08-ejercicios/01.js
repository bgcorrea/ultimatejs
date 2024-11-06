function paraAbsoluto(arr) {
    return arr.map(num => Math.abs(num));

    // let numerosPositivos = []
    // for (let i of arr) {
    //     if (i < 0){
    //         i = i*-1
    //         numerosPositivos.push(i)
    //     }
    //     else {
    //         numerosPositivos.push(i)
    //     }
    

    // }
    // return numerosPositivos
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos)