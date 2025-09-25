const { Schema, model } = require('mongoose');

const CitaShema = Schema({
    titulo: {
        type: String,
        required: true
    },
    notas: {
        type: String,
    },
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    inicio: {
        type: Date,
        required: true
    },
    fin: {
        type: Date,
        required: true
    }
});

CitaShema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Cita', CitaShema )