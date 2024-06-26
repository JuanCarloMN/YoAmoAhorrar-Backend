const { Schema } = require("mongoose");

const ProspectoSchema = Schema({

    prospectoClave: {
        type: String,
        require: true,
        unique: true
    },
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
    prospectoCiudad: {
        type: Number,
        require: true,
    },
    prospectoEstado: {
        type: Number,
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

module.exports = model( 'Prospecto', ProspectoSchema )