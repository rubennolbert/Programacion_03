
//ejercicio 1
//array con las 13 frutas

const frutas = [
    { id: 1, nombre: "manzana", precio: 1500, imagen: "img/manzana.jpg" },
    { id: 2, nombre: "banana", precio: 1000, imagen: "img/banana.jpg" },
    { id: 3, nombre: "frutilla", precio: 3000, imagen: "img/frutilla.jpg" },
    { id: 4, nombre: "pera", precio: 2500, imagen: "img/pera.jpg" },
    { id: 5, nombre: "naranja", precio: 9000, imagen: "img/naranja.jpg" },
    { id: 6, nombre: "pomelo-rojo", precio: 2000, imagen: "img/pomelo-rojo.jpg" },
    { id: 7, nombre: "pomelo-amarillo", precio: 2000, imagen: "img/pomelo-amarillo.jpg" },
    { id: 8, nombre: "anana", precio: 3000, imagen: "img/anana.jpg" },
    { id: 9, nombre: "kiwi", precio: 2000, imagen: "img/kiwi.jpg" },
    { id: 10, nombre: "mandarina", precio: 800, imagen: "img/mandarina.jpg" },
    { id: 11, nombre: "sandia", precio: 2200, imagen: "img/sandia.jpg" },
    { id: 12, nombre: "arandano", precio: 5000, imagen: "img/arandano.jpg" },
    { id: 13, nombre: "frambuesa", precio: 4000, imagen: "img/frambuesa.png" }
];

let carrito = []; //array global

//ejercicio 2
// func imprime datos del alumno en consola y el header
function imprimirDatosAlumno(){

    const alumno = { dni: 34786815, nombre: "Ruben", apellido: "Lopez" };
    console.log(`Alumno: ${alumno.nombre} ${alumno.apellido} - DNI: ${alumno.dni}`);
    document.getElementById("nombre-alumno").textContent = `${alumno.nombre} ${alumno.apellido}`;
}

//ejercicio 3
//muestra frutas dentro del contenedor-productos por pantalla
function mostrarFrutas(array = frutas){

    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = "";
    array.forEach(fruta => {
        const div = document.createElement("div");
        div.classList.add("card-producto");
        div.innerHTML = `
            <img src="${fruta.imagen}" alt="${fruta.nombre}">
            <h3>${fruta.nombre}</h3>
            <p>$${fruta.precio}</p>
            <button>Agregar al carrito</button>
        `;
        div.querySelector("button").addEventListener("click", () => agregarAlCarrito(fruta));
        contenedor.appendChild(div);
    });
}

//ejercicio 5
//agrega una ffruta al carrito, mas incremento su cantidad
function agregarAlCarrito(fruta){

    const existente = carrito.find(p => p.id === fruta.id);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ ...fruta, cantidad: 1 });
    }
    mostrarCarrito();
    guardarCarritoEnStorage();
}


//muestra el contenido del carrito en pantalla
function mostrarCarrito(){

    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;
    carrito.forEach(fruta => {
        const li = document.createElement("li");
        li.classList.add("bloque-item");
        li.innerHTML = `
            <p class="nombre-item">${fruta.nombre} - $${fruta.precio}</p>
            <button class="boton-eliminar">Eliminar</button>
        `;
        li.querySelector("button").addEventListener("click", () => eliminarProducto(fruta.id));
        lista.appendChild(li);
        total += fruta.precio * fruta.cantidad;
        cantidadTotal += fruta.cantidad;
    });

    //ejercicio 7
    document.getElementById("contador-carrito").textContent = `Carrito: ${cantidadTotal} productos`;
    document.getElementById("total-carrito").textContent = `Total: $${total}`;
}


//ejercicio 5, continuacion
//elimina un producto del carrito por id
function eliminarProducto(id){

    carrito = carrito.filter(p => p.id !== id);
    mostrarCarrito();
    guardarCarritoEnStorage();
}


//ejercicio 9
//vaciar carrito
function vaciarCarrito(){

    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
    alert("Carrito vaciado correctamente");
}


//Ejercicioo 6
//guarda el carrito en el storage
function guardarCarritoEnStorage(){

    localStorage.setItem("carrito", JSON.stringify(carrito));

}


//recupera el carrito de storage
function recuperarCarritoDeStorage(){

    const data = localStorage.getItem("carrito");
    if (data) {
        carrito = JSON.parse(data);
        mostrarCarrito();
    }
}

//ejercicioo 4
//filtra frutas mientras el usuario escribe
function filtrarFrutas(e){

    const texto = e.target.value.toLowerCase();
    const filtradas = frutas.filter(f => f.nombre.toLowerCase().includes(texto));
    mostrarFrutas(filtradas);
}


//inicializacion
function init(){

    imprimirDatosAlumno();
    mostrarFrutas();
    recuperarCarritoDeStorage();

    document.getElementById("input-busqueda").addEventListener("input", filtrarFrutas);
    document.getElementById("btn-vaciar-carrito").addEventListener("click", vaciarCarrito);
    document.getElementById("ordenar-nombre").addEventListener("click", () => {
        const ordenadas = [...frutas].sort((a, b) => a.nombre.localeCompare(b.nombre));
        mostrarFrutas(ordenadas);
    });
    
    document.getElementById("ordenar-precio").addEventListener("click", () => {
        const ordenadas = [...frutas].sort((a, b) => a.precio - b.precio);
        mostrarFrutas(ordenadas);
    });
}

window.addEventListener("DOMContentLoaded", init);

