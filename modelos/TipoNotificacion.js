const { Schema } = require("mongoose");

const TipoNotificacionSchema = Schema({

    tipoNotificacionDescripcion: {
        type: String,
        required: true,
    },
});

TipoNotificacionSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'TipoNotificacion', TipoNotificacionSchema )