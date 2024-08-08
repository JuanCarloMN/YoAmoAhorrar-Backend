const { Schema, model } = require("mongoose");

const ProspectoSchema = Schema({

    prospectoNombre: {
        type: String,
        required: true,
    },
    prospectoApellidoP: {
        type: String,
        required: false,
    },
    prospectoApellidoM: {
        type: String,
        required: false,
    },
    prospectoRFC: {
        type: String,
        required: true,
    },
    prospectoCURP: {
        type: String,
        required: true,
    },
    prospectoNacimiento: {
        type: Date,
        required: true,
    },
    prospectoEstadoCivil: {
        type: String,
        required: false
    },
    prospectoSexo: {
        type: String,
        required: false
    },
    prospectoEscolaridad: {
        type: String,
        required: false
    },
    prospectoCelular: {
        type: String,
        required: true,
    },
    prospectoTelefono: {
        type: String,
        required: false,
    },
    prospectoEmail: {
        type: String,
        required: true,
    },
    prospectoDireccion: {
        type: String,
        required: true,
    },
    prospectoCP: {
        type: Number,
        required: true,
    },
    prospectoColonia: {
        type: String,
        required: true,
    },
    prospectoCiudad: {
        type: String,
        required: true,
    },
    prospectoEstado: {
        type: String,
        required: true,
    },
    prospectoEmpresa: {
        type: String,
        required: false
    },
    prospectoPuesto: {
        type: String,
        required: false
    },
    prospectoAntiguedad: {
        type: String,
        required: false
    },
    prospectoActividades: {
        type: String,
        required: false
    },
    prospectoConyugue: {
        type: String,
        required: false
    },
    prospectoNumeroHijos: {
        type: String,
        required: false
    },
    // prospectoHijos: {
    //     hijos: [
    //         {
    //         hijoNombre: String,
    //         hijoEdad: Number,
    //         hijoNotas: String
    //         }
    //     ],
    //     required: false
    // },
    prospectoTipoVivienda: {
        type: String,
        required: false
    },
    prospectoPasatiempo: {
        type: String,
        required: false
    },
    prospectoMascotas: {
        type: String,
        required: false
    },
    prospectoDeporte: {
        type: String,
        required: false
    },
    prospectoReferido: {
        type: String,
        required: false,
    },
    prospectoDesde: {
        type: Date,
        required: true,
    },
    prospectoNotas: {
        type: String,
        required: false,
    }
});

ProspectoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Prospecto', ProspectoSchema );