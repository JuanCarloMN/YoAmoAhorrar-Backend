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

NotificacionSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Notificacion', NotificacionSchema )