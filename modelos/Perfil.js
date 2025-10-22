const { Schema, model } = require('mongoose');

const PerfilSchema = Schema({

    perfilNombre: {
        type: String,
        required: true
    },
    perfilEmail: {
        type: String,
        required: false,
    },
    perfilTelefono: {
        type: String,
        required: false,
    },
    perfilSitioWeb: {
        type: String,
        required: false,
    },
    perfilIngresos: {
        type: Number,
        default: 0,
        required: false,
    },
    perfilObjetivo: {
        type: Number,
        default: 0,
        required: false,
    },
    perfilRespuestas: [
        {
        type: Number,
        required: false
        }
    ],
    perfilResultado: {
        type: String,
        required: false
    },
    perfilPrivacidad: {
        type: Boolean,
        required: false,
    },
    perfilFecha: {
        type: Date,
        required: true
    },
    perfilAtendido: {
        type: Boolean,
        required: true,
        default: false
    }
});

PerfilSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Perfil', PerfilSchema )