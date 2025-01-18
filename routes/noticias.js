/*
    Rutas de Noticias
    host + /api/noticias
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerNoticias, agregarNoticia, actualizarNoticia, eliminarNoticia } = require('../controllers/noticias');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener noticias
router.get( '/', obtenerNoticias );

// Agregar noticia
router.post( 
    '/nuevo', 
    [
        check('noticiaTitulo', 'El titulo de la noticia es obligatorio').not().isEmpty(),
        check('noticiaDetalle', 'El detalle de la noticia es obligatorio').not().isEmpty(),
        check('noticiaCategoria', 'La categoría de la noticia es obligatoria').not().isEmpty(),
        check('noticiaUsuario', 'El usuario de la noticia es obligatorio').not().isEmpty(),
        check('noticiaFecha', 'La fecha de la noticia es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    agregarNoticia );

// Actualizar noticia
router.put( 
    '/:id', 
    [
        check('noticiaTitulo', 'El titulo de la noticia es obligatorio').not().isEmpty(),
        check('noticiaDetalle', 'El detalle de la noticia es obligatorio').not().isEmpty(),
        check('noticiaCategoria', 'La categoría de la noticia es obligatoria').not().isEmpty(),
        check('noticiaUsuario', 'El usuario de la noticia es obligatorio').not().isEmpty(),
        check('noticiaFecha', 'La fecha de la noticia es obligatoria').custom( isDate ),
        fieldsValidate
    ],
    actualizarNoticia );

// Eliminar noticia
router.delete( '/:id', eliminarNoticia );

module.exports = router;