const { Schema } = require("mongoose");

const PromotorSchema = Schema({

    promotorDescripcion: {
        type: String,
        required: true,
    },
});

PromotorSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Promotor', PromotorSchema )