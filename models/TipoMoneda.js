const { Schema } = require("mongoose");

const TipoMonedaSchema = Schema({

    tipoMonedaDescripcion: {
        type: String,
        required: true,
    },
    tipoMonedaSimbolo: {
        type: String,
        required: true,
    },
});

module.exports = model( 'TipoMoneda', TipoMonedaSchema )