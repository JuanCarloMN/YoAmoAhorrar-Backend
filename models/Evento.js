const { Schema, model } = require('mongoose');
const Usuario = require('./Usuario');

const EventoShema = Schema({

    titulo: {
        type: String,
        required: true
    },
    notas: {
        type: String,
    },
    tipo: {
        type: Number,
        required: true
    },
    inicio: {
        type: Date,
        required: true
    },
    fin: {
        type: Date,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

EventoShema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;

});

module.exports = model( 'Evento', EventoShema )