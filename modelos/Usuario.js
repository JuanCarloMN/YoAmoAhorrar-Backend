const { Schema, model } = require('mongoose');

const UsuarioShema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: false,
        default: 'sinfoto.jpg'
    }
});

UsuarioShema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Usuario', UsuarioShema )