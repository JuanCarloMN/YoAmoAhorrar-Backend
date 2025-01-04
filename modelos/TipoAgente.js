const { Schema } = require("mongoose");

const TipoAgenteSchema = Schema({

    tipoAgenteDescripcion: {
        type: String,
        required: true,
    },
});

TipoAgenteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'TipoAgente', TipoAgenteSchema )