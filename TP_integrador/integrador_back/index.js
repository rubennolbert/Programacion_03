import express from "express";
const app = express();//inicializar instancioa de espress

app.get("/", (req, res) => {
    res.send("hola mundo");
})//cuiando hagamos una peticion get, a la raiz del proyeto vamos a responder enviadole con un texto plano "hola mundo" 

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
})