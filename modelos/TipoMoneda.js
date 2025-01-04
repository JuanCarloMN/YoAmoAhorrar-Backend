const { Schema } = require("mongoose");

const TipoMonedaSchema = Schema({

    tipoMonedaDescripcion: {
        type: String,
        required: true,
    },
    tipoMonedaSimbolo: {
        type: String,
        required: true,
    },
});

TipoMonedaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'TipoMoneda', TipoMonedaSchema )