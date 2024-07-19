const { type } = require("express/lib/response");
const { Schema, model } = require("mongoose");

const CodigoPostalSchema = Schema({

    cp: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    colonias: [],
});

CodigoPostalSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Codigo_Postales', CodigoPostalSchema )

