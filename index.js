const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');


// Crear el servidor de Express
const app = express();

// Conexión a la Base de Datos
dbConnection();

// CORS
app.use( cors() );

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth') );
app.use( '/api/eventos', require('./routes/eventos') );
app.use( '/api/clientes', require('./routes/clientes') );
app.use( '/api/prospectos', require('./routes/prospectos') );

app.use( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'public/index.html') );
})

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
})