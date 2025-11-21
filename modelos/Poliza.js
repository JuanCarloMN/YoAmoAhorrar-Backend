const { Schema, model } = require("mongoose");

const PolizaSchema = Schema({

    polizaClave: {
        type: String,
        required: true,
        unique: true
    },
    polizaTipo: {
        type: String,
        required: true,
    },
    polizaPlan: {
        type: String,
        default: '',
        required: false,
    },
    polizaTipoMoneda: {
        type: String,
        required: true,
    },
    polizaMonto: {
        type: Number,
        default: 0,
        required: true,
    },
    polizaSumaAsegurada: {
        type: Number,
        default: 0,
        required: false,
    },
    polizaPrimaPlaneada: {
        type: Number,
        default: 0,
        required: false,
    },
    polizaPrimaBasica: {
        type: Number,
        default: 0,
        required: false,
    },
    polizaDeducible: {
        type: Number,
        default: 0,
        required: false,
    },
    polizaCoaseguro: {
        type: Number,
        default: 0,
        required: false,
    },
    polizaTope: {
        type: Number,
        default: 0,
        required: false,
    },
    polizaPlazo: {
        type: Number,
        required: false,
    },
    polizaTipoPlazo: {
        type: String,
        default: '',
        required: false,
    },
    polizaFecha: {
        type: Date,
        required: true,
    },
    polizaCliente: {
        type: String,
        required: true,
    },
    polizaTipoPago: {
        type: String,
        default: '',
        required: false,
    },
    polizaAsesor: {
        type: String,
        required: true,
    },
    polizaAseguradora: {
        type: String,
        required: true,
    },
    polizaEstatus: {
        type: String,
        default: 'Activo',
        required: true,
    },
    polizaNotas: {
        type: String,
        default: '',
        required: false,
    },
})

PolizaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Poliza', PolizaSchema )