const { Schema, model } = require("mongoose");

const CatalogoSchema = Schema({

    catalogoDescripcion: {
        type: String,
        required: true,
    },
    catalogoDatos: [{
        descripcion: {
            type: String,
            required: true
        },
        simbolo: {
            type: String,
            required: false
        }
    }],
});

CatalogoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Catalogo', CatalogoSchema )

