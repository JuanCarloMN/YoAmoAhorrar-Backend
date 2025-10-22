/*
    Rutas de Perfil
    host + /api/perfil
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { eliminarPerfil, actualizarPerfil, agregarPerfil, obtenerPerfiles } = require('../controllers/perfil');

const router = Router();

// Todos tienen que pasar por la validación del JWT
// router.use( jwtValidate );

// Obtener perfiles
router.get( '/', obtenerPerfiles );

// Agregar perfil
router.post( 
    '/nuevo', 
    [
        check('perfilNombre', 'El nombre es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    agregarPerfil );

// Actualizar perfil
router.put( 
    '/:id', 
    [
        check('perfilNombre', 'El nombre es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    actualizarPerfil );

// Eliminar perfil
router.delete( '/:id', eliminarPerfil );

module.exports = router;