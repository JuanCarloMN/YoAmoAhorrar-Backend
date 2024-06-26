const { Schema } = require("mongoose");

const TipoEstatusSchema = Schema({

    tipoEstatusDescripcion: {
        type: String,
        required: true,
    },
});

module.exports = model( 'TipoEstatus', TipoEstatusSchema )