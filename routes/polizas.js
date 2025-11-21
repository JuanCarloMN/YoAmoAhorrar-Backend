/*
    Rutas de Pólizas
    host + /api/polizas
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerPolizas, agregarPoliza, eliminarPoliza, buscarPoliza, actualizarPoliza } = require('../controllers/polizas');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener pólizas
router.get( '/', obtenerPolizas );

// Agregar póliza
router.post( 
    '/nuevo', 
    [
        check('polizaClave', 'El número de póliza es obligatorio').not().isEmpty(),
        check('polizaCliente', 'El cliente de la póliza es obligatorio').not().isEmpty(),
        check('polizaTipo', 'El tipo de póliza es obligatorio').not().isEmpty(),
        check('polizaAsesor', 'El asesor de la póliza es obligatorio').not().isEmpty(),
        check('polizaAseguradora', 'La aseguradora de la póliza es obligatoria').not().isEmpty(),
        fieldsValidate
    ],
    agregarPoliza );

// Actualizar póliza
router.put( 
    '/:id', 
    [
        check('polizaClave', 'El número de póliza es obligatorio').not().isEmpty(),
        check('polizaCliente', 'El cliente de la póliza es obligatorio').not().isEmpty(),
        check('polizaTipo', 'El tipo de póliza es obligatorio').not().isEmpty(),
        check('polizaAsesor', 'El asesor de la póliza es obligatorio').not().isEmpty(),
        check('polizaAseguradora', 'La aseguradora de la póliza es obligatoria').not().isEmpty(),
        fieldsValidate
    ],
    actualizarPoliza );

// Buscar póliza
router.get( '/:id', buscarPoliza );

// Eliminar póliza
router.delete( '/:id', eliminarPoliza );

module.exports = router;