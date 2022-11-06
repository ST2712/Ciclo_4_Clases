const express = require("express");
const app = express();
const errorMiddleware = require('./middleware/errors')
const cookieParser = require("cookie-parser")

//Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

//Importar rutas
const productos = require("./routes/products")
const usuarios = require("./routes/auth")

app.use('/api', productos) //Ver si se va a cambiar
app.use('/api',usuarios)

//MiddleWare para manejo de errores
app.use(errorMiddleware)

module.exports = app