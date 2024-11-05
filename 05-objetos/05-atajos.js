// let obj = {};
let obj = new Object();

/*
new Number();
new Array();
new String();
new Boolean();
*/

function Usuario(){
    this.name = 'Chanchto feliz';
}

let user = new Usuario();
console.log(user);
console.log(user.constructor);

const s1 = '1 + 1';
const s2 = new String('1 + 1');
console.log(s1, s2);
console.log(typeof(s1));
console.log(typeof(s2));
