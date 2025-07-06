import dotenv from "dotenv";

dotenv.config(); //cargamos las variables de entorno  desde el archivo .env

export default{
    port: process.env.PORT || 3000,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}