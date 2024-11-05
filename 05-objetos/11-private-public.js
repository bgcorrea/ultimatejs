function Usuario() {
    this.name = 'Nicolas';
    let id = 1;
    let log = function() {
        console.log('logging...')
    }

    this.guardar = function() {
        log()
        console.log('guardando...');
    }
}

const usuario = new Usuario();
usuario.guardar()

