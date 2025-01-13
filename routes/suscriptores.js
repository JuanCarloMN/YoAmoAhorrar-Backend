/*
    Rutas de Suscriptores
    host + /api/suscriptores
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerSuscriptores, actualizarSuscriptor, eliminarSuscriptor } = require('../controllers/suscriptores');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener suscriptores
router.get( '/', obtenerSuscriptores );

// Actualizar suscriptor
router.put( 
    '/:id', 
    [
        check('suscriptorEmail', 'El eMail del suscriptor es obligatorio').isEmail(),
        check('suscriptorFecha', 'La fecha de suscripción es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    actualizarSuscriptor );

// Eliminar suscriptor
router.delete( '/:id', eliminarSuscriptor );

module.exports = router;