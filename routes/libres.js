/*
    Rutas de opciones libres de autenticación
    host + /api/libres
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { fieldsValidate } = require('../middlewares/fields-validate');
const { agregarMensaje } = require('../controllers/mensajes');
const { obtenerBlogs } = require('../controllers/blog');
const { suscripcionBlog } = require('../controllers/suscriptores');

const router = Router();

// Todos tienen que pasar por la validación del JWT
// router.use( jwtValidate );

// Agregar mensaje
router.post( 
    '/nuevoMensaje', 
    [
        check('mensajeNombre', 'El nombre de quien envia el mensaje es obligatorio').not().isEmpty(),
        check('mensajeEmail', 'El eMail de quien envia el mensaje es obligatorio').isEmail(),
        check('mensajeDetalle', 'El mensaje es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    agregarMensaje );

// Obtener blogs
router.get( '/obtenerBlogs', obtenerBlogs );

// Suscribirse a blog
router.post( 
    '/suscribirseBlog', 
    [
        check('suscriptorEmail', 'El eMail de quien se suscribe es obligatorio').isEmail(),
        fieldsValidate
    ],
    suscripcionBlog );
module.exports = router;