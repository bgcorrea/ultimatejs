const letras = ['a', 'b'];
// agregar al final
letras.push('c');
console.log(letras);
// agregar al comienzo
letras.unshift('y', 'z');
console.log(letras);

letras.splice(2, 1, 23)
console.log(letras);
