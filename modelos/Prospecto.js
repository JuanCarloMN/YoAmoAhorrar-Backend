const { Schema, model } = require("mongoose");

const ProspectoSchema = Schema({

    prospectoNombre: {
        type: String,
        require: true,
    },
    prospectoApellidoP: {
        type: String,
        require: true,
    },
    prospectoApellidoM: {
        type: String,
        require: true,
    },
    prospectoCelular: {
        type: String,
        require: true,
    },
    prospectoEmail: {
        type: String,
        require: true,
    },
    prospectoTelefono: {
        type: String,
        require: true,
    },
    prospectoRFC: {
        type: String,
        require: true,
    },
    prospectoCURP: {
        type: String,
        require: true,
    },
    prospectoNacimiento: {
        type: Date,
        require: true,
    },
    prospectoDireccion: {
        type: String,
        require: true,
    },
    prospectoCP: {
        type: Number,
        require: true,
    },
    prospectoColonia: {
        type: String,
        required: true,
    },
    prospectoCiudad: {
        type: String,
        require: true,
    },
    prospectoEstado: {
        type: String,
        require: true,
    },
    prospectoReferido: {
        type: String,
        require: true,
    },
    prospectoDesde: {
        type: Date,
        required: true,
    },
    prospectoNotas: {
        type: String,
        required: true,
    },
});

ProspectoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Prospecto', ProspectoSchema );