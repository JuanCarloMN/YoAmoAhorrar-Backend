const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect( process.env.DB_CONNECTION );
        console.log( 'Conexión a la BD' );

    } catch (error) {

        console.log( error );
        throw new Error( 'Error a la hora de inicializar la BD' );

    }
}

module.exports = {
    dbConnection
}