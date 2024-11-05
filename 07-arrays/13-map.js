const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// const lista = usuarios.map(usuario => `<li>${usuario.nombre}</li>`);
// const html = `<ol>${lista.join('')}</ol>`
// console.log(lista);
// console.log(html);

// const mapped = usuarios.map(usuario => ({
//         ...usuario,
//         mayor: usuario.edad > 17,
//     }
// ));

// console.log(mapped);

const lista = usuarios
    .filter(usuario => usuario.edad > 17 )
    .map(usuario => `<li>${usuario.nombre}</li>`)

const html = `<ol>${lista.join('')}</ol>`;
console.log(lista)