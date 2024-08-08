const { Schema, model } = require("mongoose");

const ClienteSchema = Schema({

    clienteNombre: {
        type: String,
        required: true,
    },
    clienteApellidoP: {
        type: String,
        required: false,
    },
    clienteApellidoM: {
        type: String,
        required: false,
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
    clienteEstadoCivil: {
        type: String,
        required: false
    },
    clienteSexo: {
        type: String,
        required: false
    },
    clienteEscolaridad: {
        type: String,
        required: false
    },
    clienteCelular: {
        type: String,
        required: true,
    },
    clienteTelefono: {
        type: String,
        required: false,
    },
    clienteEmail: {
        type: String,
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
    clienteEmpresa: {
        type: String,
        required: false
    },
    clientePuesto: {
        type: String,
        required: false
    },
    clienteAntiguedad: {
        type: String,
        required: false
    },
    clienteActividades: {
        type: String,
        required: false
    },
    clienteConyugue: {
        type: String,
        required: false
    },
    clienteNumeroHijos: {
        type: String,
        required: false
    },
    // clienteHijos: {
    //     hijos: [
    //         {
    //         hijoNombre: String,
    //         hijoEdad: Number,
    //         hijoNotas: String
    //         }
    //     ],
    //     required: false
    // },
    clienteTipoVivienda: {
        type: String,
        required: false
    },
    clientePasatiempo: {
        type: String,
        required: false
    },
    clienteMascotas: {
        type: String,
        required: false
    },
    clienteDeporte: {
        type: String,
        required: false
    },
    clienteReferido: {
        type: String,
        required: false,
    },
    clienteDesde: {
        type: Date,
        required: true,
    },
    clienteNotas: {
        type: String,
        required: false,
    }
});

ClienteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Cliente', ClienteSchema )