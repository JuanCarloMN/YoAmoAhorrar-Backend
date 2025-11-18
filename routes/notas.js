/*
    Rutas de Notas
    host + /api/notas
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerNotas, actualizarNota, eliminarNota, agregarNota, buscarNotas } = require('../controllers/notas');
const { isDate } = require('moment');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener notas
router.get( '/', obtenerNotas );

// Agregar nota
router.post( 
    '/nueva', 
    [
        check('notaCliente', 'El cliente de la nota es obligatorio').not().isEmpty(),
        check('notaCategoria', 'La categoría de la nota es obligatoria').not().isEmpty(),
        check('notaDetalle', 'El detalle de la nota es obligatoria').not().isEmpty(),
        check('notaUsuario', 'El usuario de la nota es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    agregarNota );

// Actualizar nota
router.put( 
    '/:id', 
    [
        check('notaCliente', 'El cliente de la nota es obligatorio').not().isEmpty(),
        check('notaCategoria', 'La categoría de la nota es obligatoria').not().isEmpty(),
        check('notaDetalle', 'El detalle de la nota es obligatoria').not().isEmpty(),
        check('notaUsuario', 'El usuario de la nota es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    actualizarNota );

// Buscar notas del cliente
router.get( '/:id', buscarNotas );

// Eliminar nota
router.delete( '/:id', eliminarNota );

module.exports = router;