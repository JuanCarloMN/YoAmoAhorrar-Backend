/*
    Rutas de Citas
    host + /api/citas
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerCitas, agregarCita, actualizarCita, eliminarCita } = require('../controllers/citas');

const router = Router();

// Todos tienen que pasar por la validación del JWT
// router.use( jwtValidate );

// Obtener Citas
router.get( '/', obtenerCitas );

// Agregar Cita
router.post( 
    '/nuevo', 
    [
        check('titulo', 'El título de la cita es obligatorio').not().isEmpty(),
        check('nombre', 'El nombre de quien pide la cita es obligatorio').not().isEmpty(),
        check('email', 'El email de quien pide la cita es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono de quien pide la cita es obligatorio').not().isEmpty(),
        check('inicio', 'Fecha de inicio de la cita es obligatoria').custom( isDate ),
        check('fin', 'Fecha de finalización de la cita es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    agregarCita );

// Actualizar Cita
router.put( 
    '/:id', 
    [
        check('titulo', 'El título de la cita es obligatorio').not().isEmpty(),
        check('nombre', 'El nombre de quien pide la cita es obligatorio').not().isEmpty(),
        check('email', 'El email de quien pide la cita es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono de quien pide la cita es obligatorio').not().isEmpty(),
        check('inicio', 'Fecha de inicio de la cita es obligatoria').custom( isDate ),
        check('fin', 'Fecha de finalización de la cita es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    actualizarCita );

// Eliminar Cita
router.delete( '/:id', eliminarCita );

module.exports = router;