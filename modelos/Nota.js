const { Schema, model } = require('mongoose');

const NotaSchema = Schema({

    notaCliente: {
        type: String,
        required: true,
    },
    notaCategoria: {
        type: String,
        required: true,
    },
    notaDetalle: {
        type: String,
        required: true,
    },
    notaUsuario: {
        type: String,
        required: true,
    },
    notaFecha: {
        type: Date,
        required: true,
        default: new Date
    }
});

NotaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Nota', NotaSchema )