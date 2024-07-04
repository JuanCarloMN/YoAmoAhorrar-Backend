const { response } = require("express");
const Catalogo = require("../modelos/Catalogo");

const obtenerCatalogos = async ( req, res = response ) => {
    try {

        const catalogos = await Catalogo.find();

        res.status(200).json({
            ok: true,
            catalogos
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los catalogos'
        })
    }
}

const agregarCatalogo = async ( req, res = response ) => {
    const catalogo = new Catalogo( req.body );

    try {

        const catalogoGuardado = await catalogo.save();

        res.status(201).json({
            ok: true,
            catalogo: catalogoGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar al catalogo'
        })
    }
}

const actualizarCatalogo = async ( req, res = response ) => {

    const catalogoId = req.params.id;
    const uid = req.uid;

    try {

        const catalogo = await Catalogo.findById( catalogoId );

        if ( !catalogo ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el catalogo para actualizar'
            });
        }

        const nuevoCatalogo = {
            ...req.body,
        }
        
        const catalogoActualizado = await Catalogo.findByIdAndUpdate( catalogoId, nuevoCatalogo, { new: true } );
        res.status(200).json({
            ok: true,
            catalogo: catalogoActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del catalogo'
        })
    }
}

const eliminarCatalogo = async ( req, res = response ) => {
    
    const catalogoId = req.params.id;

    try {

        const catalogo = await Catalogo.findById( catalogoId );

        if ( !catalogo ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el catalogo para eliminar'
            });
        }
 
        const catalogoEliminado = await Catalogo.findByIdAndDelete( catalogoId );
        res.status(200).json({
            ok: true,
            catalogo: catalogoEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al catalogo'
        })
    }
}

module.exports = {
    obtenerCatalogos,
    agregarCatalogo,
    actualizarCatalogo,
    eliminarCatalogo,
}