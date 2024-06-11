/*
    Rutas de Usuario / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();


router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de tener al menos 6 caracteres').isLength( { min: 6 } ),
        fieldsValidate
    ],
    crearUsuario 
);

router.post( 
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de tener al menos 6 caracteres').isLength( { min: 6 } ),
        fieldsValidate
    ],
    loginUsuario 
);

router.get( '/renew', jwtValidate, revalidarToken);


module.exports = router;