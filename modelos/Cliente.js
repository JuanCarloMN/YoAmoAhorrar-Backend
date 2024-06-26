const { Schema, model } = require("mongoose");

const ClienteSchema = Schema({

    clienteNombre: {
        type: String,
        required: true,
    },
    clienteApellidoP: {
        type: String,
        required: true,
    },
    clienteApellidoM: {
        type: String,
        required: true,
    },
    clienteCelular: {
        type: String,
        required: true,
    },
    clienteEmail: {
        type: String,
        required: true,
    },
    clienteTelefono: {
        type: String,
        required: true,
    },
    clienteRFC: {
        type: String,
        required: true,
    },
    clienteCURP: {
        type: String,
        required: true,
    },
    clienteNacimiento: {
        type: Date,
        required: true,
    },
    clienteDireccion: {
        type: String,
        required: true,
    },
    clienteCP: {
        type: Number,
        required: true,
    },
    clienteColonia: {
        type: String,
        required: true,
    },
    clienteCiudad: {
        type: String,
        required: true,
    },
    clienteEstado: {
        type: String,
        required: true,
    },
    clienteReferido: {
        type: String,
        required: true,
    },
    clienteDesde: {
        type: Date,
        required: true,
    },
    clienteNotas: {
        type: String,
        required: true,
    }
});

module.exports = model( 'Cliente', ClienteSchema )