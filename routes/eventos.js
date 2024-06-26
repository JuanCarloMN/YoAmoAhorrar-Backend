/*
    Rutas de Eventos
    host + /api/eventos
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/eventos');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener eventos
router.get( '/', obtenerEventos );

// Crear eventos
router.post( 
    '/nuevo', 
    [
        check('titulo', 'El título del evento es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de evento es obligatorio').not().isIn( 1, 2, 3, 4, 5 ),
        check('inicio', 'Fecha de inicio del evento es obligatoria').custom( isDate ),
        check('fin', 'Fecha de finalización del evento es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    crearEvento );

// Actualizar eventos
router.put( 
    '/:id', 
    [
        check('titulo', 'El título del evento es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de evento es obligatorio').not().isIn( 1, 2, 3, 4, 5 ),
        check('inicio', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('fin', 'Fecha de finalización es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    actualizarEvento );

// Eliminar evento
router.delete( '/:id', eliminarEvento );

module.exports = router;