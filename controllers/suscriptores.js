const { response } = require("express");
const SuscripcionBlog = require("../modelos/SuscripcionBlog");

const obtenerSuscriptores = async ( req, res = response ) => {
    try {

        const suscriptores = await SuscripcionBlog.find();

        res.status(200).json({
            ok: true,
            suscriptores
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener la lista de Suscriptores'
        })
    }
}


const suscripcionBlog = async ( req, res = response ) => {

    const suscripcion = new SuscripcionBlog( req.body );

    try {

        const suscripcionGuardado = await suscripcion.save();

        res.status(201).json({
            ok: true,
            suscripcion: suscripcionGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar la suscripcion'
        })
    }
}

const actualizarSuscriptor = async ( req, res = response ) => {

    const suscriptorId = req.params.id;
    const uid = req.uid;

    try {

        const suscriptor = await SuscripcionBlog.findById( suscriptorId );

        if ( !suscriptor ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el suscriptor para actualizar'
            });
        }

        const nuevoSuscriptor = {
            ...req.body,
        }
        
        const suscriptorActualizado = await SuscripcionBlog.findByIdAndUpdate( suscriptorId, nuevoSuscriptor, { new: true } );
        res.status(200).json({
            ok: true,
            suscriptor: suscriptorActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del suscriptor'
        })
    }
}

const eliminarSuscriptor = async ( req, res = response ) => {
    
    const suscriptorId = req.params.id;

    try {

        const suscriptor = await SuscripcionBlog.findById( suscriptorId );

        if ( !suscriptor ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el suscriptor para eliminar'
            });
        }
 
        const suscriptorEliminado = await SuscripcionBlog.findByIdAndDelete( suscriptorId );
        res.status(200).json({
            ok: true,
            suscriptor: suscriptorEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al suscriptor'
        })
    }
}

module.exports = {
    actualizarSuscriptor,
    eliminarSuscriptor,
    obtenerSuscriptores,
    suscripcionBlog,
}