const usuarios = [
    { id:1, name: 'Chanchito' },
    { id:2, name: 'Feliz' },
    { id:1, name: 'Benjamin' },
];

// const resultado = usuarios.indexOf({ id:1, name: 'Chanchito' });
const resultado = usuarios.find(usuario =>
    usuario.name === 'Benjamin');
console.log(resultado)