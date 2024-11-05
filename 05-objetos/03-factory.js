function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function recuperarClave() {
            console.log('Recuperando clave... ');
        },
    };    
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io')
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io')
let user3 = crearUsuario('Chanchito', 'chanchito@holamundo.io')

console.log(user1, user2, user3)