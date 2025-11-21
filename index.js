const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');
const { log } = require('util');


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
app.use( '/api/blog', require('./routes/blog') );
app.use( '/api/catalogos', require('./routes/catalogos') );
app.use( '/api/citas', require('./routes/citas') );
app.use( '/api/clientes', require('./routes/clientes') );
app.use( '/api/polizas', require('./routes/polizas') );
app.use( '/api/codigoPostal', require('./routes/codigoPostal') );
app.use( '/api/eventos', require('./routes/eventos') );
app.use( '/api/libres', require('./routes/libres') );
app.use( '/api/mensajes', require('./routes/mensajes') );
app.use( '/api/notas', require('./routes/notas') );
app.use( '/api/noticias', require('./routes/noticias') );
app.use( '/api/perfil', require('./routes/perfil') );
app.use( '/api/prospectos', require('./routes/prospectos') );
app.use( '/api/suscriptores', require('./routes/suscriptores') );


// endpoint para los indicadores
app.get('/api/indicadores', async (req, res) => {
    
    const fechaActual = new Date();
    const fechaInicio = "1995-04-04";
    const fechaFin = `${ fechaActual.getFullYear() }-${ ( fechaActual.getMonth() + 1 ).toString().padStart( 2, '0' ) }-${ fechaActual.getDate().toString().padStart( 2, '0' ) }`;
    const ruta = process.env.VITE_API_BANXICO_URL + process.env.VITE_API_BANXICO_SERIE_UDI + ',' + process.env.VITE_API_BANXICO_SERIE_DOLAR + '/datos/' + fechaInicio + '/' + fechaFin + '?token=' + process.env.VITE_BANXICO_TOKEN_KEY;

    const response = await fetch( ruta );
    
    const body = await response.text();
    
    res.set( 'Content-Type', response.headers.get('content-type') || 'application/json' )
    res.send( body )
})

app.use( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'public/index.html') );
})

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
})

