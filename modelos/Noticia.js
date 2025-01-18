const { Schema, model } = require('mongoose');

const NoticiaSchema = Schema({

    noticiaTitulo: {
        type: String,
        required: true
    },
    noticiaDetalle: {
        type: String,
        required: true,
    },
    noticiaCategoria: {
        type: String,
        required: true,
    },
    noticiaUsuario: {
        type: String,
        required: true,
    },
    noticiaFecha: {
        type: Date,
        required: true
    },
    noticiaActivada: {
        type: Boolean,
        default: true,
        required: false,
    },
    noticiaFotos: [
        {
        foto: {
            type: String,
            required: false
            }
        }
    ]
});

NoticiaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Noticia', NoticiaSchema )