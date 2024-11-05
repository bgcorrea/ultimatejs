const user = {
    id: 1
}; // Al ser constante no podrá dejar de ser objeto.

user.name = 'Nicolas';
user.guardar = function() {
    console.log('Guardando', user.name)
}

user.guardar();
console.log(user)

delete user.name;
delete user.guardar;
console.log(user)

//const user1 = Object.freeze ({id: 1 }); Freeze no permite agregar ni cambiar.
const user1 = Object.seal ( {id: 1 }); // Seal permite modificar pero no agregar.

user1.name = 'Nicolas';
console.log(user1)
