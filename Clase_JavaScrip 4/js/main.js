///////////////////////
//javascript 4

//introduccion a arrays y objetos, metodos de string y arrays
//estructuras de datos fundamentales 

//arrays
//lista  ordenada de elementos donde cada elemento tiene una posicion o indice (indice 0())
//puede contener cualquier tipo de datos( numeros, cadenas, booleanos, otros arrays, objetos, funciones, ect)

let frutas = ["manzana", "banana", "pomelo"];

console.log(frutas[0]); //manzana 
console.log(frutas[2]); //pomelo

//objetos
//coleccion  de pares clave-valor
//las claves son cadenas que indentifican cada valor

/*
let persona = 
{
    nombre: "ruben",
    equipo: "boca",
    edad: 35,
    ciudad: "caba"

    
    agitar: function()
    {
        console.log(`aguante ${this,equipo} `);
    }
        
}

//notacion de puntos
console.log(persona.nombre);

//notacion de corchete
console.log(persona["equipo"]);
*/






/*********************************************************************************************************************************** */
// objetos globales //


console.log("mensaje informativo");
console.warn("Esto es una advertencia");
console.error("Esto es u error");
console.time("tiempo de ejecucion");

for(let i = 0; i<1000; i++)
{
    //console.log(i);
}

console.timeEnd("tiempo de ejecucion");

let usuarios = 
[
    {   nombre: "Iara", edad: 20 },
    {   nombre: "Lara", edad: 19}
]

console.table(usuarios);

let texto = "hola";
console.log(texto.toUpperCase());  //convertimos a mayuscula




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// almacenamientos de datos de Javascript
// almancenar datos implica elegir la estructura adecuada de acuerdo al tipo de informacion que se quiere guardar  y tambien como se desea manipular

// variables simples: valores unicos como numeros y string
// objetos: representar datos complejos con propiedades
// arrays: almacenar una lista  de elementos (idealmente del mismo tipo)
// arrays de objetos: para manejar listas de elementos complejos que contienen multiples propiedades

// objetos
// los objetos son ideales para representar una unica entidad o elemento que tiene varias propiedades o atributos

let persona2 = 
{
    // key o clave: nombre valor: "lucas"
    nombre: "lucas",
    edad: 30,
    ocupacion: "desarrollador web"
}

/* cuando usar objetos:
    - cuando deseamos representar una entidad unica con multiples atributos
    - cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - cuando necesitamos acceder a propiedades especificas mediante sus nombres
    */

    // arrrays de objetos
    // ua estructura que pèrmite almacenar multiples objetos, donde cada objetos tiene la misma estrcutura o contiene atributos similares

    let persona = 
    [
        {nombre: "Rodrigo", edad:29, ocupacion: "Desarrollador frontend"},
        {nombre: "Gaston", edad:29, ocupacion: "Desarrollador frontend"},
        {nombre: "Joaquin", edad:29, ocupacion: "Desarrollador frontend"},
        {nombre: "Lucas", edad:29, ocupacion: "Desarrollador frontend"},
    ]

    /*
    cuando usar arrays de objetos?
        - cuando necesitamos almacenar multiples instancias de una misma entidad o una estructura de datos
        - cuando planeamos realizar operaciones sobre una lista de elementos como iteraciones, filtrados o agrupaciones
        - si necesitamos aplicar metodos de los arrays como map, filter, reduce, find

        ejemplos de casos de uso:
        - listado de usuarios registrados en un plataforma
        - inventario de productos en una tienda
        - historial de transacciones o registros
    */

    // ejemplos 
    // usuario de un  objeto que representa a un usuario especifico, con datos personales y carrito de compra

    let usuario = 
    {
        id: 1,
        nombre: "gabriel",
        email: "gabriel.com",
        // dentro del usuario es un array de objetos, donde cada objetos representa un producto en el carrito
        carrito: [
            {pruductoId: 101, nombre: "Laptop", precio: 100000, stock: 15},
            {pruductoId: 202, nombre: "Teclado", precio: 100000, stock: 15}
        ]
    }
    
    //inventario es un array  de objetos que representa todos los productos disponibles en la tienda

    let inventario =
    [
        {pruductoId: 101, nombre: "Laptop", precio: 100000, stock: 15},
            {pruductoId: 202, nombre: "Teclado", precio: 100000, stock: 15}
    ]


    // otros objetos globales del navegador: localstorage y sessionStorage
    // permiten alamcenar datos de amenra persistente (localStorage) o temporal (sessionStorage)

    /*
        localStorage:
        
        descripcion:
        - nos permite almacenar datos de manera persistente en el navegadro.
        - los datos almacenados en localstorage NO tienen una fecha de expiracion, esto significa que estaran disponibles incluso despues de cerrar el navegador o apagar la computadora

        caracteristicas:

        - capacidad de almacenamiento de 5-10 MB
        - persistente: los datos permanecen almacenados hasta que son eliminados manualmente
        - almacenamiento por origen (dominio y protocolo): los datos se almacenan por dominio, lo que significa que SOLO son accesibles dentro del mismo dominio
        - datos almacenados como string: todos los datos almacenados en localstorage son de tipo string. si se quiere almacenar otros tipos de datos, como objetos, 
        deben ser convertidos a string (generalmente JSON)

        metodos:
        - guardar datos: localStorage.getItem(clave, valor);
        - leer datos: localStorage.getItem(clave);
        - eliminar un dato: localStorage.removeItem(clave);
        - eliminar todos los datos: localStorage.clear();
    */

        // guardamos datos en localStorage
        localStorage.setItem("nombre", "Nicolas");
        localStorage.setItem("apellido", "Leipold");

        // obtener los datos de localstorage
        const nombre = localStorage.getItem("nombre");
        const apellido = localStorage.getItem("apellido");

        console.log(nombre);
        console.log(apellido);

        

        // Eliminaer un dato especifico
        localStorage.removeItem("nombre");

        // eliminar un dato especifico
        localStorage.clear();

        /*
        console.log(nombre);
        console.log(apellido);
        */

        /*
        JSON.stringify(miArray)
        JSON.parse(localStorage.getItem('miArray')
        */
        

        // almacenando un objeto en localStorage

        let user =
        {
            nombre: "Lucas",
            apellido: "Iusef",
            edad: 22
        }

        localStorage.setItem("user", JSON.stringify(user));

        // obtener el objeto de localStorage y lo convertimos de vuelta en un objeto
        let usuarioGuardado = JSON.parse(localStorage.getItem("user"));
        console.log(usuarioGuardado);
        console.log(usuarioGuardado.apellido);

        // .fetch
        // .XMLHTTPRequest

        /*

        sessionStorage:
        - indentico a localstorage salvo que en sessionstorage los datos solo se mantiene disponible durante la sesion del navegador
        - si cerramos pestaña o ventana los datos se eliminan automaticamente

        metodos:
        - guardar datos: sessionStorage.setItem(clave, valor);
        - leer datos: sessionStorage.getItem(clave);
        - Eliminar un dato: sessionStorage.removeItem(clave);
        - eliminar todos los datos: sessionStorage.clear();

        */

        // guardar datos en sessionsStorage
        sessionStorage.setItem("nombre", "candela");

        //obtener datos de sessionStorage
        console.log(sessionStorage.getItem("nombre"));

        // eliminar un dato especifica
        sessionStorage.removeItem("nombre");

        sessionStorage.clear();



        /////////////////COOKIES///////////////////////////
        /*
        las cookies son pequeños fragmentos de informacion que se almacenan en el navegador y se envian con cada peticion HTTP al servidor.
        mas antiguas que localStorage y sessionStorage y fueron ampliamente usadas, mantener la session del usuario, guardar preferencias, etc.

        caravcteristicas:

        - capacidad de almacenamiento de 4KB por cookie.
        - persistencia: pueden tener una fecha de expiracion espeficica. si no se establece una fecha de expiracion, la cookie sera eliminada al cerrar la sesion del navegador.
        - envio al servidor: a diferencia del localStorage y sessionStorage, las cookies se envian automaticamente al servidor con cada solicitud HTTP, lo que puede ser util 
        pero tambien puede generar sobrecarga en la red.
        
        */
        // crear cookie
        // cookier sin expiracion
        document.cookie = "pais=Argentina; path/";

        // cookie con expiracion 31 de diciembre 2025
        document.cookie = "usuario=Axel; path=/"

        //eliminamos una cookie estableciendo una fecha de expiracion en el pasado
        document.cookie = "usuario=; expires:Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "pais=; expires=Thu. 01 Jan 1970 00:00:00 UTC; path=/;";


        // leer todas las cookies
        console.log(document.cookie);

        /*
        recuerden chicos que la principal diferencia entre el localstorage y el sessionStorage (si bien sus funciones de getItem y setItem son iguales),
         el localStorage no tiene fecha de expiracion, y el sessionStorage sí ambos tienen un tamaño maximo que ronda los 10mb (segun el explorador)
        pero los diferencia principalmente eso. (por eso vamos a estar usando localStorage para persistir datos porrr ahora)

        las cookies, veanlo como un localstorage "tuneado" y que se suele usar para cosas mas delicadas (tokens de autenticacion, cosas encriptadas 
        necesarias para que las paginas nos reconozcan, etc)

        un ejemplo facil de cookie chicos, imaginense un login en su ecommerce, al cual una vez que escribieron su usuario y su contraseña, 
        y se lo enviaron a su backend, su backend les dijo "Ok, datos correctos. Toma este codigo 123ABC para que la proxima que entres a 
        la pagina me pases esa cookie y no tengas que volver a iniciar sesion". 
        La proxima vez que vamos a la pagina si esa cookie existe, la enviamos de una y evitamos el login por ejemplo
        */


        //iteracion en arrays, objetos y arrays de objetos en javaScript
        // metodos de iteracion en arrays

        let numeros = [1, 2, 3, 4, 5];

        //for
        for(let i = 0; i < numeros.length; i++)
        {
            console.log(numeros[i]);
        }

        // for -> modificacion de elementos
        for(let i = 0; i < numeros.length; i++)
        {
            numeros[i] *= 2;
        }
        console.log(numeros);

        ////////////////////////
        // bucle for..of
        for(let numero of numeros)
        {
            console.log(numero)
        }

        // foreach
        numeros.forEach(numero => console.log(numero));

        numeros.forEach(numero => {console.log(numero)});

        // map() crea un nuevo array sin modificar el original
        let duplicados = numeros.map(numero => numero * 2);
        console.log(duplicados);

        // filter() para obtener un subconjunto de datos
        let mayoresQueTres = numeros.filter(numeros => numero > 3);
        console.log(mayoresQueTres);

        // reduce() para acumular valores
        let sumaTotal = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
        console.log(sumaTotal);

        const numeros2 = [1, 2, 3, 4];
        const suma = numeros2.reduce(function (resultado, elemento)
        {
            return resultado + elemento;
        })

        console.log(suma);

        /* ejercicio practico con array de numero

        - map() para crear un array donde cada numero este al cuadrado
        - filter() para obtener solos los numeros mayores a un valor determinado
        - reduce() para encontrar el promedio de los numeros en el array

        recomiendo:
        - primer ejercicio sin map
        - segundo ejercicio sin filter
        - tercer ejercicio sin reduce
        */

        //////////////////////////////////////
        // iteracion en objetos

        //  for... in para iterar claves
        let estudiante = 
        {
            nombre: "Luca",
            edad: 22,
            curso: "javaScript"
        }

        for(let propiedad in estudiante)
        {
            console.log(`${propiedad}: ${estudiante[propiedad]}`);
        }

        // objet.keys() para obtener claves
        let claves = Object.keys(estudiante);

        claves.forEach(claves => console.log(claves));

        // objet.values() para obtener valores
        for(let [clave, valor] of Object.entries(estudiante))
        {

            console.log(`${clave}: ${valor}`);
        }

        /* Ejercicio practico con un objeto libro con propiedades titulo, autor, anio y genero

            - usar for... in para iterar y mostrar cada clave y valor
            - usar Objet.keys() y objet.values() para crear dos arrays: uno con claves y otro con valores.
            - usar Objet.entries() para imprimir cada par  clave-valor
            */

        ////////////////////////////////////////
        //iteracion  en arrays de objets

        // foreach()

        let estudiantes = 
        [
            {nombre: "Nahuel", edad: 20},
            {nombre: "Lautaro", edad: 21},
            {nombre: "Tehuel", edad: 22},
        ];

        estudiantes.forEach(estudiante =>
        {
            console.log(`Nombre: ${estudiante.nombre}, edad: ${estudiante.edad}`);
        }
        )

        for(let i = 0; i < estudiantes.length; i++)
        {
            console.log(`Nombre: ${estudiantes[i].nombre}, edad: ${estudiantes[i].edad}`);
        }

        //ejemplo de for clasico
        console.log("bucle for clasico");
        for(let i = 0; i<estudiantes.length; i++)
        {
            console.log(`Nombre: ${estudiantes[i].nombre}, edad: ${estudiantes[i].edad}`);
        }
        
        //filter 
        let estudiantesMayores = estudiantes.filter(estudiantes => estudiante.edad > 18);
        console.log(estudiantesMayores);