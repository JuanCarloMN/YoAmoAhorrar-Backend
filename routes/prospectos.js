/*
    Rutas de Prospectos
    host + /api/prospectos
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { agregarProspecto, obtenerProspectos, actualizarProspecto, eliminarProspecto } = require('../controllers/prospectos');

// const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/eventos');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Obtener prospectos
router.get( '/', obtenerProspectos );

// Agregar prospecto
router.post( 
    '/nuevo', 
    [
        check('prospectoNombre', 'El nombre del prospecto es obligatorio').not().isEmpty(),
        check('prospectoRFC', 'El RFC del prospecto es obligatorio').not().isEmpty(),
        check('prospectoCURP', 'El CURP del prospecto es obligatorio').not().isEmpty(),
        check('prospectoCelular', 'El celular del prospecto es obligatorio').not().isEmpty(),
        check('prospectoNacimiento', 'Fecha de nacimiento del prospecto es obligatoria').custom( isDate ),
        check('prospectoEmail', 'El eMail del prospecto es obligatorio').isEmail(),
        check('prospectoDireccion', 'La dirección del prospecto es obligatorio').not().isEmpty(),
        check('prospectoCP', 'El código postal del prospecto es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    agregarProspecto );

// Actualizar prospectos
router.put( 
    '/:id', 
    [
        check('prospectoNombre', 'El nombre del prospecto es obligatorio').not().isEmpty(),
        check('prospectoRFC', 'El RFC del prospecto es obligatorio').not().isEmpty(),
        check('prospectoCURP', 'El CURP del prospecto es obligatorio').not().isEmpty(),
        check('prospectoCelular', 'El celular del prospecto es obligatorio').not().isEmpty(),
        check('prospectoNacimiento', 'Fecha de nacimiento del prospecto es obligatoria').custom( isDate ),
        check('prospectoEmail', 'El eMail del prospecto es obligatorio').isEmail(),
        check('prospectoDireccion', 'La dirección del prospecto es obligatorio').not().isEmpty(),
        check('prospectoCP', 'El código postal del prospecto es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    actualizarProspecto );

// Eliminar prospecto
router.delete( '/:id', eliminarProspecto );

module.exports = router;