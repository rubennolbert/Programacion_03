////////////////////
// JavaScript V //
// Objetos, clases y objetos globales. Almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos

////////////////////
// JavaScript V //
// Objetos, clases y objetos globales. Almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos


// Object literal o objeto literal es la manera mas comun de crear objetos en JavScript
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2021
};

console.log(auto.modelo)

// la keyword o palabra clave "this" hace referencia al objeto desde el cual se esta invocando al metodo
let auto2 = {
    marca: "Renault",
    modelo: "12",
    anio: 1999,
    getInfo: function() {
        return `Este auto es un ${this.marca}, del año ${this.anio}`;
    }
};

console.log(auto2.getInfo());


///////////////////////////
// Clases en JavaScript //
// Son una forma de crear objetos y metodos
// Proporcionan una estructura clara para organizar el codigo
// Se introducen a partir de ES6 y simplifican la creacion de objetos en comparacion con las funciones constructoras anteriores

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} y aguante BOOOOOOOOOOOOOOOOOCAAAAAAAAAAA`;
    }
}

let luca = new Persona("Luca", 25);
console.log(`${luca.nombre} tiene ${luca.edad} y se presenta como: ${luca.saludar()}`);


let iara = new Persona("Iara", 23);
console.log(iara.saludar());


// Herencia
// Permite cerar nuevas clases basadas en clases existentes.
// La clase hija puede heredar propiedades y metodos de la clase padre usando la palabra clave extends

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}

class Perro extends Animal {
    ladrar() {
        console.log(`${this.nombre} ladra`);
    }
}

let miPerro = new Perro("Trotsky");
miPerro.hacerSonido();
miPerro.ladrar();

/* Ejercicio practico sugerido
    
    - Crear una clase Coche que tenga propiedades como marca, modelo y anio, y un metodo para mostrar la descripcion del coche

    - Crear una clase CocheDeportivo que herede de Coche y añada una propiedad velocidadMaxima y un metodo mostrarVelocidad


    
Ejercicio practico sugerido 2
    
- Crear un objeto Libro con propiedades y metodos e iterar sobre sus propiedades
    
    - Crear una clase Producto con sus propiedades y métodos, y crear una clase hija Electrodomestico que añada características adicionales

*/


//////////////////////
// Objetos globales//

// Ejemplo completo del Objeto global console

console.log("Mensaje informativo");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

console.time("Tiempo de ejecucion");

for(let i = 0; i < 1000; i++) {
    // console.log(i);
}

console.timeEnd("Tiempo de ejecucion");

let usuarios = [
    { nombre: "Iara", edad: 20 },
    { nombre: "Lara", edad: 19}
];

console.table(usuarios);

let texto = "Hola";
// JavaScript trata temporalmente a tipos de datos primitivos como si fueran objetos y les asigna metodos como .toUpperCase()
console.log(texto.toUpperCase()); 

// Objetos globales localStorage y sessionStorage (mas abajo)


////////////////////////////////////////////
// Almacenamiento de datos en JavaScript //

// Almacenar datos implica elegir la estructura adecuada de acuerdo al tipo de informacion que se quiere guardar y tambien como se desea manipular

// Variables simples: Valores unicos como numeros y strings
// Objetos: Representar datos complejos con propiedades
// Arrays: Almacenar una lista de elementos (IDEALMENTE del mismo tipo)
// Arrays de objetos: Para manejar listas de elementos complejos que contienen multiples propiedades


/////////////////
// 1. Objetos //
// Los objetos son ideales para representar una unica entidad o elemento que tiene varias propiedades o atributos
let persona2 = {
    // key o clave: nombre  valor: "Lucas"
    nombre: "Lucas",
    edad: 30,
    ocupacion: "Desarrollador web"
}

/* Cuando usar objetos?
    - Cuando deseamos reppresentar una entidad unica con multiples atributos
    - Cuando sabemos que no habrá múltiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades específicas mediante sus nombres
*/

///////////////////////////
// 2. Arrays de objetos //
// Una estructura que permite almacenar multiples objetos, donde cada objetos tiene la misma estructura o contiene atributos similares

let personas = [
    { nombre: "Rodrigo", edad: 20, ocupacion: "Desarrollador frontend"},
    { nombre: "Gaston", edad: 21, ocupacion: "Desarrollador backend"},
    { nombre: "Joaquin", edad: 22, ocupacion: "Desarrollador fullstack"},
    { nombre: "Lucas", edad: 23, ocupacion: "Desarrollador de videojuegos"}
];

/*  Cuando usar arrays de objetos?
        - Cuando necesitemos almacenar multiples instancias de una misma entidad o una estructura de datos
        - Cuando planeamos realizar operaciones sobre una lista de elementos como iteraciones, filtrados o agrupaciones
        - Si necesitamos aplicar metodos de los arrays como map, filter, reduce, find

    Ejemplos de casos de uso:
        - Listado de usuarios registrados en una plataforma
        - Inventario de productos en una tienda
        - Historial de transacciones o registros
*/

// Ejemplo
// usuario es un objeto que representa a un usuario especifico, con datos personales y carrito de compra
let usuario = { 
    id: 1,
    nombre: "Gabriel",
    email: "gabri@el.com",
    // Dentro del usuario es un array de objetos, donde cada objetos representa un producto en el carrito
    carrito: [
        { productoId: 101, nombre: "Laptop", precio: 100000, cantidad: 1 },
        { productoId: 202, nombre: "Teclado", precio: 15000, cantidad: 2 }
    ]
};

// inventario es un array de objetosque representa todos los productos disponibles en la tienda
let inventario = [
    { productoId: 101, nombre: "Laptop", precio: 100000, stock: 15 },
    { productoId: 202, nombre: "Teclado", precio: 15000, stock: 20 }
]


// Otros objetos globales del navegador: localStorage y sessionStorage

// Permiten almacenar datos de manera persistente (localStorage) o temporal (sessionStorage)

/*   ///////////////////
    // localStorage //

    // Descripcion //

- Nos permite almacenar datos de manera persistente en el navegador.

- Los datos almacenados en localStorage NO tienen una fecha de expiracion, esto significa que estaran disponilbes incluso despues de cerrar el navegador o apagar la computadora.


    // Caracteristicas //
- Capacidad de almacenamiento de 5-10 MB
- Persistencia: Los datos permanecen almacenados hasta que son eliminados manualmente
- Almacenamiento por origen (dominio y protocolo): Los datos se almacenan por dominio, lo que significa que SOLO son accesibles dentro del mismo dominio
- Datos almacenados como strings: Todos los datos almacenados en localStorage son de tipo string. Si se quiere almacenar otros tipos de datos, como objetos, deben ser convertidos a strings (generalmente JSON)


    // Metodos //
- Guardar datos: localStorage.setItem(clave, valor);
- Leer datos: localStorage.getItem(clave);
- Eliminar un dato: localStorage.removeItem(clave);
- Eliminar todos los datos: localStorage.clear();
*/

// Guaramos datos en localStorage
localStorage.setItem("nombre", "Nicolas");
localStorage.setItem("apellido", "Leipold");

// Obtener los datos de localStorage
const nombre = localStorage.getItem("nombre");
const apellido = localStorage.getItem("apellido");

console.log(nombre);
console.log(apellido);

// Eliminar un dato especifico
localStorage.removeItem("nombre");

// Eliminar todo el localStorage
localStorage.clear();


// Almacenando un objeto en localStorage
let user = {
    nombre: "Lucas",
    apellido: "Iusef",
    edad: 22
}

// Convertimos el objeto a JSON y lo almacenamos
localStorage.setItem("user", JSON.stringify(user));
console.log(localStorage.getItem("user"));

// Obtener el objeto de localStorage y lo convertimos de vuelta en un objeto
let usuarioGuardado = JSON.parse(localStorage.getItem("user"));
console.log(usuarioGuardado);
console.log(usuarioGuardado.apellido);

localStorage.clear();

// Para consumir recursos en JSON en una URL
// .fetch()
// .XMLHTTPRequest()


/*   ////////////////////
    // sessionStorage //

    // Descripcion //

- Identico a localStorage salvo que en sessionStorage los datos solo se mantienen disponibles durante la sesion del navegador

- Si cerramos pestaña o ventana, los datos se eliminan automaticamente


    // Metodos //
- Guardar datos: sessionStorage.setItem(clave, valor);
- Leer datos: sessionStorage.getItem(clave);
- Eliminar un dato: sessionStorage.removeItem(clave);
- Eliminar todos los datos: sessionStorage.clear();
*/

// Guardar datos en sessionStorage
sessionStorage.setItem("nombre", "Candela");

// Obtener datos de sessionStorage
console.log(sessionStorage.getItem("nombre"));


// Eliminar un dato especifico
sessionStorage.removeItem("nombre");

sessionStorage.clear();



/*   //////////////
    // Cookies //

    // Descripcion //

- Las cookies son pequeños fragmentos de informacion que se almacenan en el navegador y se envian con cada peticion HTTP al servidor.

- Mas antiguas que localStorage y sessionStorage y fueron ampliamente usadas, mantener la session del usuario, guardar preferencias etc


    // Caracteristicas //
- Capacidad de almacenamiento de 4KB por cookie.

- Persistencia: Pueden tener una fecha de expiracion especifica. Si no se establece una fecha de expiracion, la cookie sera eliminada al cerrar la sesion del navegador.

- Envío al servidor: A difernecia de localStorage y sessionStorage, las cookies se envian automaticamente al servidor con cada solicitud HTTP, lo que puede ser util pero tambien puede generar sobrecarga en la red



- Almacenamiento por origen (dominio y protocolo): Los datos se almacenan por dominio, lo que significa que SOLO son accesibles dentro del mismo dominio
*/

// Crear una cookie
// Cookie sin expiracion
document.cookie = "pais=Argentina; path=/;";

// Cookie con expiracion 1 enero 2026
document.cookie = "usuario=Axel; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/;";

// Eliminamos una cookie estableciendo una fecha de expiracion en el pasado
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "pais=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Leer todas las cookies
console.log(document.cookie);

// Ejemplo completo
// Crear una cookie que expira en 7 dias
function setCookie(name, value, days) {
const date = new Date();
date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
const expires = "expires=" + date.toUTCString();
document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Obtener el valor de una cookie
function getCookie(name) {
const decodedCookie = decodeURIComponent(document.cookie);
const cookies = decodedCookie.split(';');

for (let i = 0; i < cookies.length; i++) {

let cookie = cookies[i].trim();

if (cookie.indexOf(name + "=") === 0) {
    return cookie.substring(name.length + 1, cookie.length);
}
}
return "";
}

// Establecemos una cookie
setCookie("idioma", "es", 7);

// Ler una cookie
console.log(getCookie("idioma"));



/////////////////////////////////////////////////////////////////////
// Iteracion en arrays, objetos y arrays de objetos en JavaScript //

// Metodos de iteracion en arrays /////////////
let numeros = [1, 2, 3, 4, 5];

///////////////////////
// Bucle for clasico//

// for -> ejemplo basico
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// for -> modificacion de elementos
/*
for(let i = 0; i < numeros.length; i++) {
    numeros[i] *= 2;   
}
    */

console.log(numeros);


////////////////////
// Bucle for..of //
for(let numero of numeros) {
    console.log(numero)
}

// .forEach()
numeros.forEach(numero => console.log(numero));

numeros.forEach(numero => {
    console.log(numero);
});

// map() crea un nuevo array sin modificar el original
let duplicados = numeros.map(numero => numero * 2);
console.log(duplicados);

// filter() para obtener un subconjunto de datos
let mayoresQueTres = numeros.filter(numero => numero > 3);
console.log(mayoresQueTres);

// reduce() para acumular valores
let sumaTotal = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
console.log(sumaTotal);

const numeros2 = [1, 2, 3, 4];
const suma = numeros2.reduce(function (resultado, elemento) {
    return resultado + elemento;
}, 0);

console.log(suma); // 10


/* Ejercicio Practico con array de numeros

    - map() para crear un array donde cada numero este al cuadrado
    - filter() para obtener solo los numeros mayores a un valor determinado
    - reduce() para encontrar el promedio de los numeros en el array
    
    Recomendado
    - Primer ejercicio sin map
    - Segundo ejercicio sin filter
    - Tercer ejercicio sin deduce
*/


////////////////////////////
// Iteracion en objetos //

// for ... in para iterar claves
let estudiante = {
    nombre: "Luca",
    edad: 22,
    curso: "JavaScript"
}

for(let propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`);
}

// Object.keys() para obtener claves
let claves = Object.keys(estudiante);

claves.forEach(clave => console.log(clave));

// Object.values() para obtener valores
let valores = Object.values(estudiante);
console.log(valores);


// Object.entries() para obtener pares clave-valor
for(let [clave, valor] of Object.entries(estudiante)) {
    console.log(`${clave}: ${valor}`);
}


/* Ejercicio Practico con un objeto libro con propiedades titulo, autor, anio y genero

    - Usar for... in para iterar y mostrar cada clave y valor
    - Usar Object.keys() y Object.values() para crear dos arrays: uno con claves y otro con valores
    - Usar Object.entries() para imprimir cada par clave-valor
*/


/////////////////////////////////////
// Iteracion en arrays de objetos //

// forEach()

let estudiantes = [
    { nombre: "Nahuel", edad: 17 },
    { nombre: "Lautaro", edad: 19 },
    { nombre: "Tehuel", edad: 20 }
];

estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
});

// Ejemplo con for clasico
console.log("Bucle for clasico");
for(let i = 0; i < estudiantes.length; i++) {
    console.log(`Nombre: ${estudiantes[i].nombre} ,Edad: ${estudiantes[i].edad}`);
}


// filter()
let estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 18);
console.log(estudiantesMayores);

/* Ejercicio Practico con arrays de objetos

Creen un array de objetos que represente una lista de productos, cad auno con propiedades: nombre, precio, stock

    - .map() para reducir el precio de cada producto un 10%
    - .filter() para obtener solo los productos con stock disponibles
    - .reduce() para obtener el valor del inventario
*/



// Repaso y profundización de iteracion de estructuras de datos en JavaScript

/* for tradicional
    - Ventajas: Maximo control, podemos usar break y continue. Mayor rendimiento (mas rapido)
    - Desventajas: Mas verboso (más complejo de leer)
*/


/* forEach()

array.forEach((elemento, indice, arrayOriginal) => {
    console.log(elemento, indice);
});

    - Ventajas: Sintaxis limpia (facil de leer), no necesita contador
    - Desventajas: No se puede romper el bucle con break
*/

// Modificar un array externo
const numeros3 = [1, 2, 3];
const dobles = [];

numeros3.forEach(num => dobles.push(num * 2));
console.log(dobles);

// Actualizar propiedades
const estudiantes2 = [
    { nombre: "Candela", nota: 8 },
    { nombre: "Kevin", nota: 6 },
    { nombre: "Ignacio", nota: 9 }
];

estudiantes2.forEach(estudiante => {
    estudiante.aprobado = estudiante.nota >= 7;
});

console.log(estudiantes2);


/* map()

const nuevosValores = array.map(elemento => elemento * 2);

    - Proposito: Transformar cada elemento
    - Retorna: Nuevo array con los resultados
*/

// Crear un array de cuadrados
const nums = [1, 2, 3, 4];
const cuadrados = nums.map(num => num * num);
console.log(cuadrados);

// Convertir a strings
const edades = [25, 30, 18];
const edadesStr = edades.map(edad => `Tengo ${edad} años`);
console.log(edadesStr);

// Extraer propieades
const empleados = [
    { id: 1, nombre: "Candela", departamento: "Canelones" },
    { id: 2, nombre: "Kevin", departamento: "Montevideo" },
    { id: 3, nombre: "Ignacio", departamento: "Punta del Este" }
];

const nombresEmpleados = empleados.map(emp => emp.nombre);
console.log(nombresEmpleados);


/* filter()

const filtrados = array.filter(elemento => elemento > 10)

    - Proposito: Seleccionar elementos que cumplan una condicion
    - Retorna: Nuevo array con elementos filtrados
*/

// Filtrar numeros pares
const numeros4 = [1, 2, 3, 4, 5, 6];
const pares4 = numeros4.filter(num => num % 2 === 0);
console.log(pares4);

// Filtrar strings largos
const palabras = ["hola", "adios", "bienvenido", "ok"];
const palabrasLargas = palabras.filter(palab => palab.length > 4);
console.log(palabrasLargas);

// Filtrar por propiedad
const personas2 = [
    { nombre: "Candela", edad: 25 },
    { nombre: "Kevin", edad: 17 },
    { nombre: "Ignacio", edad: 30 }
];

const mayores = personas2.filter(persona => persona.edad >= 18);
console.log(mayores);

// Filtrar multiples condiciones
const ordenes = [
    { productoId: 101, nombre: "Laptop", precio: 100000, cantidad: 1, completada: true },
    { productoId: 202, nombre: "Teclado", precio: 15000, cantidad: 3, completada: true  },
    { productoId: 103, nombre: "Mouse", precio: 10000, cantidad: 4, completada: false  }
];

const ordenesMultiplesCompletadas = ordenes.filter(orden => {
    return orden.completada && orden.cantidad > 1
});

console.log(ordenesMultiplesCompletadas);


/* reduce()

const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0)

    - Proposito: Reducir el array a un unico valor
    - Retorna: Valor acumulado
*/

// Sumar elementos
const numeros5 = [10, 20, 30];
const suma5 = numeros5.reduce((acum, num) => acum + num, 0);
console.log(suma5);

// Concatenar strings
const palabras2 = ["Hola", "mundo", "JavaScript"];
const frase = palabras2.reduce((acum, palabra) => acum + " " + palabra);
console.log(frase);

// Arrays de objetos
const ventas = [
    { productoId: 101, nombre: "Laptop", precio: 100000, cantidad: 1, completada: true },
    { productoId: 202, nombre: "Teclado", precio: 15000, cantidad: 3, completada: true  },
    { productoId: 103, nombre: "Mouse", precio: 10000, cantidad: 4, completada: false  }
];

const totalVentas = ventas.reduce((total, item) => total + (item.cantidad * item.precio), 0);

console.log(totalVentas);


/* find() y findIndex()

const encontrado = array.find(elemento => elemento.id === 123);
const indice = array.findIndex(elemento => elemento.id === 123);

    - Proposito: Buscar el primer elemento que cumpla una condicion
    - Retorna: El elemento (find) o el indice (findIndex)
*/

// Buscar numero
const numeros6 = [5, 12, 8, 130, 44];
const encontrado = numeros6.find(num => num > 10);
console.log(encontrado);

const indice = numeros6.findIndex(num => num > 100);
console.log(indice);

//Buscar un objeto por propiedad
const usuarios2 = [
    { id: 1, nombre: "Candela", activo: true },
    { id: 2, nombre: "Kevin", activo: false },
    { id: 3, nombre: "Ignacio", activo: true }
];

const usuarioActivo = usuarios2.find(usuario => usuario.activo);
console.log(usuarioActivo);

const tareas = [
    { id: 1, descripcion: "Comprar fideos", completada: false },
    { id: 2, descripcion: "Estudiar JavaScript", completada: true },
    { id: 3, descripcion: "Andar en bici", completada: false }
];

const indiceTarea = tareas.findIndex(tarea => tarea.completada);
console.log(indiceTarea);


/* for ... of

for(const elemento of array) {
    console.log(elemento);
    if(elemento === "stop") {
        break;
    }
}

    - Ventajas: Sintaxis limpia, permite break/continue
    - Desventajas: No provee indice automatico
*/

const simbolos = ['€', '$', '¥', '£'];
for(const simbolo of simbolos) {
    console.log(simbolo);
    if( simbolo === '¥') break;
}


// Iterar objetos
const empleados2 = [
    { id: 1, nombre: "Candela", salario: 3000 },
    { id: 2, nombre: "Kevin", salario: 3500 },
    { id: 3, nombre: "Ignacio", salario: 4000 }
];

for(const empleado of empleados2) {
    if(empleado.salario > 3500) {
        console.log(`${empleado.nombre} gana mas de 3500`);
        break;
    }
}


// Iteracion en objetos
// Iterando claves de objetos con for...in
const estudiante3 = {
    nombre: "Joaquin",
    edad: 30,
    curso: "JavaScript"
};

for(const propiedad in estudiante3) {
    console.log(`${propiedad}: ${estudiante3[propiedad]}`);
}

// Object.keys() para obtener claves
const claves2 = Object.keys(estudiante3);
console.log(claves2);
claves2.forEach(clave => console.log(clave));

// Object.values() para obtener valores
const valores2 = Object.values(estudiante3);
console.log(valores2);
valores2.forEach(valor => console.log(valor));

// Object.entries() para obtener pares clave-valor
for(const [clave, valor] of Object.entries(estudiante3)) {
    console.log(`${clave}: ${valor}`);
}


/* Metodos de comparacion con some() y every()

const algunoCumple = array.some(elemento => elemento > 0);
const todosCumples = array.every(elemento => elemento > 0);

    Proposito: Verificar si algunos/todos cumplen la condicion
    Retorna: Booleano
*/

// Verificar si hay numeros pares
const numeros7 = [1, 3, 5, 7, 8];
const hayPares  = numeros7.some(num => num % 2 === 0);
console.log(hayPares);

// Verificar si son todos positivos
const todosPositivos = numeros7.every(num => num > 0);
console.log(todosPositivos);

// Verificar si hay usuarios admin
const usuarios3 = [
    { id: 1, nombre: "Candela", salario: 3000, rol: "user" },
    { id: 2, nombre: "Kevin", salario: 3500, rol: "admin" },
    { id: 3, nombre: "Ignacio", salario: 4000, rol: "user" }
];

const existeAdmin = usuarios3.some(user => user.rol === "admin");
console.log(existeAdmin);



// Verificar si todos aprobaron
const estudiantes3 = [
    { nombre: "Candela", nota: 8 },
    { nombre: "Kevin", nota: 6 },
    { nombre: "Ignacio", nota: 9 }
];

const todosAprobaron = estudiantes3.every(estudiante => estudiante.nota >= 7);
console.log(todosAprobaron);

/*  Comparacion de rendimiento

        1. Bucles clasicos (for, while) son los mas rapidos
        2. Metodos funcionales (map, filter) son mas lentos pero mas expresivos
        3. for...of ofrece un buen equilibrio entre rendimiento y legibilidad

    Recomendaciones de uso

        - Transformar un array: map()
        - Filtrar elementos: filter()
        - Reducir a un valor: reduce()
        - Buscar elemento: find() o findIndex()
        - Para romper un bucle: for o for...of
        - No necesitamos romper un bucle: forEach()
        - Verificar condiciones: some() o every()
*/