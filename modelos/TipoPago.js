const { Schema } = require("mongoose");

const TipoPagoSchema = Schema({

    tipoPagoDescripcion: {
        type: String,
        required: true,
    },
});

TipoPagoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'TipoPago', TipoPagoSchema )