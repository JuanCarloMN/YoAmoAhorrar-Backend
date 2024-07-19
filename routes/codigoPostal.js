/*
    Rutas de Codigos postales
    host + /api/codigoPostal
*/
const { Router } = require('express');
const { jwtValidate } = require('../middlewares/jwt-validate');

const { obtenerCodigoPostal, buscarCodigoPostal } = require('../controllers/codigoPostal');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// *************** CATALOGOS *************** //

// Obtener códsigos postales
router.get( '/', obtenerCodigoPostal );

// Buscar código postal
router.get( 
    '/:cp', buscarCodigoPostal );

module.exports = router;