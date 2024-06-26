const { Schema } = require("mongoose");

const TipoAgenteSchema = Schema({

    tipoAgenteDescripcion: {
        type: String,
        required: true,
    },
});

module.exports = model( 'TipoAgente', TipoAgenteSchema )