const saludo = "Hola \\mundo!\n bienvenidos a\t \"ultimate javascript\" :)";

const nombre = "Nicolas"
const apellido = "Schurmann"
const nombreCompleto = nombre + " " + apellido;
function plantilla (nombre) {
    return `Hola ${nombre}!

Bienvenidos a "Ultimate JavaScript!" :)

Cariños, Nico.
`

}

console.log(plantilla("Benja"))