const { Schema, model } = require('mongoose');

const TipoPolizaSchema = Schema({

    tipoPolizaClave: {
        type: String,
        required: true,
        unique: true
    },
    tipoPolizaDescripcion: {
        type: String,
        required: true,
    },
    tipoPolizaComisionAnual: {
        type: Number,
        required: true,
        default: 0
    },
    tipoPolizaComisionSemestral: {
        type: Number,
        required: true,
        default: 0
    },
    tipoPolizaComisionTrimestral: {
        type: Number,
        required: true,
        default: 0
    },
    tipoPolizaComisionBimestral: {
        type: Number,
        required: true,
        default: 0
    },
    tipoPolizaComisionMensual: {
        type: Number,
        required: true,
        default: 0
    },
});

TipoPolizaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'TipoPoliza', TipoPolizaSchema )