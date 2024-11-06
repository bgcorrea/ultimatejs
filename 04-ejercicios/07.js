function precioCompleto(precio, impuesto) {
    let cargo = precio * impuesto;
    let total = precio + cargo;
    return total;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);