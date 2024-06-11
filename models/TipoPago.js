const { Schema } = require("mongoose");

const TipoPagoSchema = Schema({

    tipoPagoDescripcion: {
        type: String,
        required: true,
    },
});

module.exports = model( 'TipoPago', TipoPagoSchema )