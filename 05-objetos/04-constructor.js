function Usuario() { // UpperCamelCase o PascalCase
    this.id = 1;
    this.recuperarClave = function(){ // metodo
        console.log('Recuperando clave...')
    }
}

let usuario = new Usuario(); // Se crea un objeto vacio y this dentro de la funcion se encarga de asignar un valor.
console.log(usuario)

