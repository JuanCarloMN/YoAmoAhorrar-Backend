/*
    Rutas de Indicadores
    host + /api/indicadores
*/
const { Router } = require('express');

const { obtenerIndicadores } = require('../controllers/indicadores');

const router = Router();

// Todos tienen que pasar por la validación del JWT
// router.use( jwtValidate );

// Obtener indicadores
router.get( '/', obtenerIndicadores );

module.exports = router;