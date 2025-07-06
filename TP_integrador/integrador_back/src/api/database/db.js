import mysql from  "mysql2/promise";    //importaos el modulo de sql2 en modo promesa para poder usar async/await para conectarnos a la basde de datos
import environments from "../config/environments.js";

const {database} = environments;

const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});
//se conecta a la base de datos

export default connection;