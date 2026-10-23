const { Schema, model } = require('mongoose');

const RENGLONES = 27;
const COLUMNAS = 3;

// Valida que la matriz de datos sea exactamente de 27 x 3 y que todo sea numérico
const validarDatos27x3 = ( m ) =>
    Array.isArray( m ) &&
        m.length === RENGLONES &&
        m.every(fila =>
            Array.isArray( fila ) &&
                fila.length === COLUMNAS &&
                fila.every(v => typeof v === 'number' && !isNaN( v ))
);


const PlanificadorSchema = Schema({

    planificadorNombre: {
        type: String,
        required: true
    },
    planificadorEmail: {
        type: String,
        required: true,
    },
    planificadorTelefono: {
        type: String,
        required: true,
    },
    planificadorEdad: {
        type: Number,
        required: true,
    },
    planificadorTipoEmpleo: {
        type: Number,
        required: false,
    },
    planificadorPrivacidad: {
        type: Boolean,
        required: true,
    },
    planificadorDatos: {
        type: [[ Number ]],
        required: true,
        validate: {
            validator: validarDatos27x3,
            message: `La matriz de datos debe ser de ${ RENGLONES } renglones por ${ COLUMNAS } columnas`
        }
    },
    planificadorAtendido: {
        type: Boolean,
        required: true,
        default: false,
    },
    planificadorFecha: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

PlanificadorSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Planificador', PlanificadorSchema )