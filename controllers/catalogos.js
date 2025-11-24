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
            msg: 'Problemas al obtener los catálogos'
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
            msg: 'Problemas al agregar el catálogo'
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
                msg: 'No se encontró el catálogo para actualizar'
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
            msg: 'Problemas al actualizar la información del catálogo'
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
                msg: 'No se encontró el catálogo para eliminar'
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
            msg: 'Problemas al eliminar el catálogo'
        })
    }
}

const agregarDato = async ( req, res = response ) => {
    const dato = req.body ;
    try {
        const catalogo = await Catalogo.findById( dato.id );
        if ( !catalogo ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el catálogo para actualizar'
            });
        }

        const datoGuardado = await Catalogo.findOneAndUpdate( { _id: dato.id }, {
            $push:{
                catalogoDatos: { descripcion: dato.descripcion }
            }
        }, { new: true});

        res.status(201).json({
            ok: true,
            dato: datoGuardado
        })
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar el dato en el catálogo'
        })
    }
}

const actualizarDato = async ( req, res = response ) => {
    const dato = req.body;
    try {
        const catalogo = await Catalogo.findById( req.params.id );
        if ( !catalogo ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el catálogo para actualizar'
            });
        }

        const actualizar = await Catalogo.updateOne( { '_id': req.params.id }, { $set: { 'catalogoDatos.$[catDato].descripcion': dato.descripcion } }, { arrayFilters: [{ "catDato._id": dato.idActualizar }] }, { new: true} )
        if ( actualizar.modifiedCount > 0 ) {
            const datoActualizado = await Catalogo.findById( req.params.id );
            res.status(200).json({
                ok: true,
                dato: datoActualizado
            })
        } else {
            res.status(401).json({
                ok: false,
                msg: "No se pudo actualizar el dato del catálogo"
            })
        }
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del catálogo'
        })
    }
}

const eliminarDato = async ( req, res = response ) => {    
    const dato = req.body;    
    try {        
        const catalogo = await Catalogo.findById( req.params.id );
        if ( !catalogo ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el catálogo para eliminar'
            });
        }

        const datoEliminar = await Catalogo.updateOne({ '_id': req.params.id }, { $pull: { 'catalogoDatos': { '_id': dato.idEliminar }} });
        if ( datoEliminar.modifiedCount > 0 ) {
            res.status(200).json({
                ok: true,
                dato: datoEliminar
            })
        } else {
            res.status(401).json({
                ok: false,
                msg: "No se pudo eliminar el dato del catálogo"
            })
        }
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar el catálogo'
        })
    }
}

module.exports = {
    actualizarDato,
    actualizarCatalogo,
    agregarDato,
    agregarCatalogo,
    eliminarDato,
    eliminarCatalogo,
    obtenerCatalogos,
}