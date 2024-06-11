const { Schema } = require("mongoose");

const NotificacionSchema = Schema({

    notificacionTitulo: {
        type: String,
        required: true,
    },
    notificacionDetalle: {
        type: String,
        required: true,
    },
    notificacionAgenteId: {
        type: Schema.Types.ObjectId,
        ref: 'Agente',
        required: true,
    },
    notificacionTipoId: {
        type: Schema.Types.ObjectId,
        ref: 'TipoNotificacion',
        required: true,
    },
    notificacionEstatus: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEstatus',
        required: true,
    },
    notificacionFecha: {
        type: Date,
        required: true,
    },
});

module.exports = model( 'Notificacion', NotificacionSchema )