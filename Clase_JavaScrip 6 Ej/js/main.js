///////////////////////
//javascript 6
// EJEMPLO EJERCICIO DOM    

window.alert("hooaaa"); //para verificar que estamos conectados con el html

let cont = document.getElementById("contenedor");

cont.innerHTML = 
`
    <div class="secundario">
        <h2>titulo secundario</h2>
        <p>parrafo secundario</P>
    </div>
`