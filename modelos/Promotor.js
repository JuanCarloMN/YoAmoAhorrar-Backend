const { Schema } = require("mongoose");

const PromotorSchema = Schema({

    promotorDescripcion: {
        type: String,
        required: true,
    },
});

module.exports = model( 'Promotor', PromotorSchema )