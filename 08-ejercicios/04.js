const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function cuantosPremium(usrs) {
    let numero = usrs.filter(usuario => usuario.plan !== 'free' );
    return numero.length
};

function cuantosMayores(usrs) {
    let numero = usrs.filter(usuario => usuario.edad > 17 );
    return numero.length
};

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));

