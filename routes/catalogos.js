/*
    Rutas de Catalogos
    host + /api/catalogos
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { agregarCatalogo, obtenerCatalogos, actualizarCatalogo, eliminarCatalogo, agregarDato, actualizarDato, eliminarDato } = require('../controllers/catalogos');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// *************** CATALOGOS *************** //

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

// *************** DATOS *************** //

// Agregar datos a un catálogo
router.post(
    '/dato/nuevo',
    [
        check('id', 'El ID del catálogo es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción del dato es obligatoria').not().isEmpty(),
        fieldsValidate
    ],
    agregarDato);

// Actualiza un dato de catalogoDatos en un catálogo
router.put(
    '/dato/:id',
    [
        check('id', 'El ID del catálogo es obligatorio').not().isEmpty(),
        check('idActualizar', 'El ID del dato a actualizar es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción del dato es obligatoria').not().isEmpty(),
        fieldsValidate
    ],
    actualizarDato);

// Elimina un dato de catalogoDatos en un catálogo
router.put(
    '/eliminaDato/:id',
    [
        check('id', 'El ID del catálogo es obligatorio').not().isEmpty(),
        check('idEliminar', 'El ID del dato a eliminar es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    eliminarDato);

module.exports = router;
