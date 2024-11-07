const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

const pagos = usuarios.filter( u => u.plan !== 'free');
pagos.sort((a, b) => {
    if (a.edad < b.edad) {
        return 1;
    }
    if (a.edad > b.edad) {
        return -1;
    }
    return 0;
});

const lista = pagos.map (u => `<li>${u.nombre}</li>`);
const html = `
<ul>
    ${lista.join(`
        `)}
</ul>
`
console.log(html)