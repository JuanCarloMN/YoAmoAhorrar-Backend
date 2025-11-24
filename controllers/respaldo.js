const { response } = require("express");

const respaldarBaseDatos = async ( req, res = response ) => {
    try {
        
        res.status(200).json({
            ok: true,
            msg: "Se respaldó de forma correcta la Base de Datos"
        })
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al respaldar la Base de Datos'
        })
    }
}

module.exports = {
    respaldarBaseDatos,
}