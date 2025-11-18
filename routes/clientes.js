/*
    Rutas de Clientes
    host + /api/clientes
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { agregarCliente, obtenerClientes, actualizarCliente, eliminarCliente, buscarCliente } = require('../controllers/clientes');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener clientes
router.get( '/', obtenerClientes );

// Agregar cliente
router.post( 
    '/nuevo', 
    [
        check('clienteNombre', 'El nombre del cliente es obligatorio').not().isEmpty(),
        check('clienteRFC', 'El RFC del cliente es obligatorio').not().isEmpty(),
        check('clienteCURP', 'El CURP del cliente es obligatorio').not().isEmpty(),
        check('clienteCelular', 'El celular del cliente es obligatorio').not().isEmpty(),
        check('clienteNacimiento', 'Fecha de nacimiento del cliente es obligatoria').custom( isDate ),
        check('clienteEmail', 'El eMail del cliente es obligatorio').isEmail(),
        check('clienteDireccion', 'La dirección del cliente es obligatorio').not().isEmpty(),
        check('clienteCP', 'El código postal del cliente es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    agregarCliente );

// Actualizar clientes
router.put( 
    '/:id', 
    [
        check('clienteNombre', 'El nombre del cliente es obligatorio').not().isEmpty(),
        check('clienteRFC', 'El RFC del cliente es obligatorio').not().isEmpty(),
        check('clienteCURP', 'El CURP del cliente es obligatorio').not().isEmpty(),
        check('clienteCelular', 'El celular del cliente es obligatorio').not().isEmpty(),
        check('clienteNacimiento', 'Fecha de nacimiento del cliente es obligatoria').custom( isDate ),
        check('clienteEmail', 'El eMail del cliente es obligatorio').isEmail(),
        check('clienteDireccion', 'La dirección del cliente es obligatorio').not().isEmpty(),
        check('clienteCP', 'El código postal del cliente es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    actualizarCliente );

// Buscar cliente
router.get( '/:id', buscarCliente );

// Eliminar cliente
router.delete( '/:id', eliminarCliente );

module.exports = router;