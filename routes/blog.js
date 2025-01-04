/*
    Rutas de Blog
    host + /api/blog
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerBlogs, agregarBlog, actualizarBlog, eliminarBlog } = require('../controllers/blog');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener blogs
router.get( '/', obtenerBlogs );

// Agregar blog
router.post( 
    '/nuevo', 
    [
        check('blogTitulo', 'El titulo del blog es obligatorio').not().isEmpty(),
        check('blogDetalle', 'El detalle del blog es obligatorio').not().isEmpty(),
        check('blogCategoria', 'La categoría del blog es obligatoria').not().isEmpty(),
        check('blogUsuario', 'El usuario del blog es obligatorio').not().isEmpty(),
        check('blogFecha', 'La fecha del blog es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    agregarBlog );

// Actualizar blog
router.put( 
    '/:id', 
    [
        check('blogTitulo', 'El titulo del blog es obligatorio').not().isEmpty(),
        check('blogDetalle', 'El detalle del blog es obligatorio').not().isEmpty(),
        check('blogCategoria', 'La categoría del blog es obligatoria').not().isEmpty(),
        check('blogUsuario', 'El usuario del blog es obligatorio').not().isEmpty(),
        check('blogFecha', 'La fecha del blog es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    actualizarBlog );

// Eliminar blog
router.delete( '/:id', eliminarBlog );

module.exports = router;