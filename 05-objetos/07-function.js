function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando... ')
        return 1
    }
}
let punto = {z:7};
Punto.call(punto, 1, 2);
console.log(punto);

/*const Point = new Function ('x', 'y',
    `
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando... ')
    }
    `
);

const p = new Point (1, 2)
console.log(p)
*/

