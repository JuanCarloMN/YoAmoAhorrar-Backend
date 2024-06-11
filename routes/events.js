/*
    Rutas de Eventos
    host + /api/event
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener eventos
router.get( '/', obtenerEventos );

// Crear eventos
router.post( 
    '/new', 
    [
        check( 'title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalización es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    crearEvento );

// Actualizar eventos
router.put( 
    '/:id', 
    [
        check( 'title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalización es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    actualizarEvento );

// Eliminar evento
router.delete( '/:id', eliminarEvento );

module.exports = router;