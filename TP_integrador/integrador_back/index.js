/// importaciones

import express from "express";

import environments from "./src/api/config/environments.js";

const app = express();//inicializar instancioa de espress
const PORT = environments.port;

///rutas
app.get("/", (req, res) => {
    res.send("hola mundo");
})//cuiando hagamos una peticion get, a la raiz del proyeto vamos a responder enviadole con un texto plano "hola mundo" 

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})