const { Schema, model } = require('mongoose');

const BlogSchema = Schema({

    blogTitulo: {
        type: String,
        required: true
    },
    blogDetalle: {
        type: String,
        required: true,
    },
    blogCategoria: {
        type: String,
        required: true,
    },
    blogUsuario: {
        type: String,
        required: true,
    },
    blogFecha: {
        type: Date,
        required: true
    },
    blogActivado: {
        type: Boolean,
        default: true,
        required: false,
    },
    blogFotos: [
        {
        foto: {
            type: String,
            required: false
            }
        }
    ]
});

BlogSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Blog', BlogSchema )