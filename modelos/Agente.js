const { Schema } = require("mongoose");

const AgenteSchema = Schema({

    agenteClave: {
        type: String,
        required: true,
        unique: true
    },
    agenteNombre: {
        type: String,
        required: true,
    },
    agenteApellidoP: {
        type: String,
        required: true,
    },
    agenteApellidoM: {
        type: String,
        required: true,
    },
    agenteEmail: {
        type: String,
        required: true,
    },
    agentePromotorId: {
        type: Schema.Types.ObjectId,
        ref: 'Promotor',
        required: true,
    },
    agenteTipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoAgente',
        required: true,
    },
});

AgenteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Agente', AgenteSchema )