//system

//saluda por pantalla
//alert("hola mundo de javascript");
//console.log("holaaaaaa");

//definicion de variables

//declaracion historica
var nombre = "ruben";

//declaracion moderna
let edad = 35;

//otra declaracion moderna
const pi = 3.1416;

console.log(nombre);
console.log(edad);
console.log(pi);

//tipos de datos primitivos

let numero = 25; //num
let texto = "hola"; //cadena de texto
let boolean = true; //booleano
let vacio = null; //dato vacio
//let undefined;

console.log(numero);
console.log(texto);
console.log(boolean);
console.log(vacio);


//operadores en javascrip
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//operadores de asignacion -> asignar valores a las variables
let x = 10;

x += 5; // X = X + 5; ahora X es 15
x -= 2; //  x = x - 3; ahora x = 13


//operadores de comparacion -> comparar  valores y devuelve resultado
let c = 5;
let d = "5";

console.log(c == d); //devuelve true porque js intepreta que son el mismo valor. == compara solo valor, no tipo
console.log(c === d); //false (compara valor y tipo)

//operadores logicos
let e = true;
let f = false;

console.log(e && f); //compara si ambos son true
console.log(e || f); // true (al menos uno es true)
console.log(!e); // false (invierte el valor de e)

//operadores de tipo
console.log(typeof 42); // number
console.log(typeof "hello"); //string

//operadores de incremento / decremento
let g = 10;
g++; //incrementa de 1
g--; //decrementa de 1

console.log(g);