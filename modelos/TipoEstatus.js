const { Schema } = require("mongoose");

const TipoEstatusSchema = Schema({

    tipoEstatusDescripcion: {
        type: String,
        required: true,
    },
});

TipoEstatusSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'TipoEstatus', TipoEstatusSchema )