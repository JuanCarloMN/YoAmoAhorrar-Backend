/*
    Rutas de Mensajes
    host + /api/mensajes
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerMensajes, agregarMensaje, eliminarMensaje, actualizarMensaje } = require('../controllers/mensajes');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener mensajes
router.get( '/', obtenerMensajes );

// Actualizar mensajes
router.put( 
    '/:id', 
    [
        check('mensajeNombre', 'El nombre de quien envia el mensaje es obligatorio').not().isEmpty(),
        check('mensajeEmail', 'El eMail de quien envia el mensaje es obligatorio').isEmail(),
        check('mensajeDetalle', 'El mensaje es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    actualizarMensaje );

// Eliminar mensaje
router.delete( '/:id', eliminarMensaje );

module.exports = router;