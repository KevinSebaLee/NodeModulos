import {PI, sumar, dividir, multiplicar, restar, numeros} from './modules/matematica.js'

let numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`);
console.log(`Los numeros importados son '${numeros}`)

let Sumar = sumar(numero1, numero2); 
let Restar = restar(numero1, numero2); 
let Dividir = dividir(numero1, numero2); 
let Multiplicar = multiplicar(numero1, numero2); 

console.log(`sumar(${numero1}, ${numero2}) = ${Sumar}`);
console.log(`restar(${numero1}, ${numero2}) = ${Restar}`);
console.log(`dividir(${numero1}, ${numero2}) = ${Dividir}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${Multiplicar}`);