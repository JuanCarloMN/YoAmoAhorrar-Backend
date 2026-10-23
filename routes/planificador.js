/*
    Rutas de Planificador
    host + /api/planificador
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidate } = require('../middlewares/fields-validate');
const { jwtValidate } = require('../middlewares/jwt-validate');
const { obtenerPlanificadores, agregarPlanificador, actualizarPlanificador, eliminarPlanificador } = require('../controllers/planificador');

const router = Router();

// Todos tienen que pasar por la validación del JWT
// router.use( jwtValidate );

// Obtener planificadores
router.get( '/', obtenerPlanificadores );

// Agregar planificador
router.post( 
    '/nuevo', 
    [
        check('planificadorNombre', 'El nombre es obligatorio').not().isEmpty(),
        check('planificadorEmail', 'El email es obligatorio').not().isEmpty(),
        check('planificadorTelefono', 'El teléfono es obligatorio').not().isEmpty(),
        check('planificadorEdad', 'La edad es obligatoria').not().isEmpty(),
        check('planificadorPrivacidad', 'Aceptar el aviso de privacidad es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    agregarPlanificador );

// Actualizar planificador
router.put( 
    '/:id', 
    [
        check('planificadorNombre', 'El nombre es obligatorio').not().isEmpty(),
        check('planificadorEmail', 'El email es obligatorio').not().isEmpty(),
        check('planificadorTelefono', 'El teléfono es obligatorio').not().isEmpty(),
        check('planificadorEdad', 'La edad es obligatoria').not().isEmpty(),
        check('planificadorPrivacidad', 'Aceptar el aviso de privacidad es obligatorio').not().isEmpty(),
        fieldsValidate
    ],
    actualizarPlanificador );

// Eliminar planificador
router.delete( '/:id', eliminarPlanificador );

module.exports = router;