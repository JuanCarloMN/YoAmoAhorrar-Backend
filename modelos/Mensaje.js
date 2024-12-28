const { Schema, model } = require("mongoose");

const MensajeSchema = Schema({

    mensajeNombre: {
        type: String,
        required: true,
    },
    mensajeEmail: {
        type: String,
        required: true,
    },
    mensajeDetalle: {
        type: String,
        required: true,
    },
    mensajeAtendido: {
        type: Boolean,
        required: false,
        default: false,
    },
    mensajeFecha: {
        type: Date,
        required: true,
    }
});

MensajeSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Mensaje', MensajeSchema );