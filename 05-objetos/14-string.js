const saludo = 'Hola Mundo!';

const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Ho"));
console.log(saludo.indexOf("aeou"));
console.log(saludo.includes("Mundo"));
let nuevoSaludo = saludo.replace("Mundo", "Nicolas")
console.log(nuevoSaludo)
console.log(saludo.replace("Mundo", "Nicolas"));
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.substring(0, 3));
console.log(saludo.substr(2, 4));

const espacios = "   Hola Mundo!   ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());
