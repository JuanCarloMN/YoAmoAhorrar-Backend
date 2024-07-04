/*
    Rutas de Catalogos
    host + /api/catalogos
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { agregarCatalogo, obtenerCatalogos, actualizarCatalogo, eliminarCatalogo } = require('../controllers/catalogos');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener catalogos
router.get( '/', obtenerCatalogos );

// Agregar catalogo
router.post( 
    '/nuevo', 
    [
        check('catalogoDescripcion', 'La descripción del catálogo es obligatoria').not().isEmpty(),
        check('catalogoDatos', 'Los datos del catálogo es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    agregarCatalogo );

// Actualizar catalogos
router.put( 
    '/:id', 
    [
        check('catalogoDescripcion', 'La descripción del catálogo es obligatoria').not().isEmpty(),
        check('catalogoDatos', 'Los datos del catálogo es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    actualizarCatalogo );

// Eliminar catalogo
router.delete( '/:id', eliminarCatalogo );

module.exports = router;