const { Schema } = require("mongoose");

const TipoNotificacionSchema = Schema({

    tipoNotificacionDescripcion: {
        type: String,
        required: true,
    },
});

module.exports = model( 'TipoNotificacion', TipoNotificacionSchema )