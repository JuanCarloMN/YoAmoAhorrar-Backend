const { Schema, model } = require("mongoose");

const SuscripcionBlogSchema = Schema({

    suscriptorEmail: {
        type: String,
        required: true,
    },
    suscriptorActivo: {
        type: Boolean,
        required: false,
        default: true,
    },
    suscriptorFecha: {
        type: Date,
        required: true,
    }
});

SuscripcionBlogSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'SuscripcionBlog', SuscripcionBlogSchema );