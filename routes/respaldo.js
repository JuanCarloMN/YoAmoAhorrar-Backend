/*
    Rutas de Respaldo
    host + /api/respaldo
*/
const { Router } = require('express');

const { jwtValidate } = require('../middlewares/jwt-validate');
const { respaldarBaseDatos } = require('../controllers/respaldo');

const router = Router();

// Todos tienen que pasar por la validación del JWT
router.use( jwtValidate );

// Respaldar base de datos
router.post( '/', respaldarBaseDatos );

module.exports = router;