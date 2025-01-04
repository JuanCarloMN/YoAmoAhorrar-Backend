const { Schema } = require("mongoose");

const PolizaSchema = Schema({

    polizaClave: {
        type: String,
        required: true,
        unique: true
    },
    polizaMonto: {
        type: Number,
        required: true,
    },
    polizaPlazo: {
        type: Number,
        required: true,
    },
    polizaEmision: {
        type: Date,
        required: true,
    },
    polizaSumaAsegurada: {
        type: Number,
        required: true,
    },
    polizaPrimaPlaneada: {
        type: Number,
        required: true,
    },
    polizaPrimaBasica: {
        type: Number,
        required: true,
    },
    polizaClienteId: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    polizaTipoPolizaClave: {
        type: Schema.Types.ObjectId,
        ref: 'TipoPoliza',
        required: true,
    },
    polizaTipoPagoId: {
        type: Schema.Types.ObjectId,
        ref: 'TipoPago',
        required: true,
    },
    polizaEstatusId: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEstatus',
        required: true,
    },
    polizaTipoMonedaId: {
        type: Schema.Types.ObjectId,
        ref: 'TipoMoneda',
        required: true,
    },
    polizaAgendeId: {
        type: Schema.Types.ObjectId,
        ref: 'Agente',
        required: true,
    },
    polizaNotas: {
        type: String,
        required: true,
    },
})

PolizaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Poliza', PolizaSchemaSchema )