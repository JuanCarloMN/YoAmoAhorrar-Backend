const { response } = require("express");
const Codigopostales = require("../modelos/Codigopostales");

const obtenerCodigoPostal = async ( req, res = response ) => {
    try {

        const codigoPostal = await Codigopostales.find();

        res.status(200).json({
            ok: true,
            codigoPostal
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los códigos postales'
        })
    }
}

const buscarCodigoPostal = async ( req, res = response ) => {

    try {

        const codigoPostal = await Codigopostales.find( { cp: parseInt( req.params.cp ) }  );

        console.log({cp: parseInt( req.params.cp ), codigoPostal});
        if ( !codigoPostal ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el código postal'
            });
        }
        
        res.status(200).json({
            ok: true,
            codigoPostal
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al buscar el código postal'
        })
    }
}

module.exports = {
    buscarCodigoPostal,
    obtenerCodigoPostal
}