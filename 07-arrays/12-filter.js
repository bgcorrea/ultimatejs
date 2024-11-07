const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

const mayores = usuarios.filter((usuario) => usuario.edad > 17);
console.log(mayores);

const menores = usuarios.filter((usuario) => usuario.edad < 18);
console.log(menores);
