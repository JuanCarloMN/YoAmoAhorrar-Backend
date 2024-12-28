const { response } = require("express");
const Mensaje = require("../modelos/Mensaje");

const obtenerMensajes = async ( req, res = response ) => {
    try {

        const mensajes = await Mensaje.find();
        res.status(200).json({
            ok: true,
            mensajes
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los mensajes'
        })
    }
}

const agregarMensaje = async ( req, res = response ) => {
    
    const mensaje = new Mensaje( req.body );

    try {

        const mensajeGuardado = await mensaje.save();
        res.status(201).json({
            ok: true,
            mensaje: mensajeGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar al mensaje'
        })
    }
}

const actualizarMensaje = async ( req, res = response ) => {

    const mensajeId = req.params.id;
    const uid = req.uid;

    try {

        const mensaje = await Mensaje.findById( mensajeId );
        if ( !mensaje ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el mensaje para actualizar'
            });
        }

        const nuevoMensaje = {
            ...req.body,
        }
        
        const mensajeActualizado = await Mensaje.findByIdAndUpdate( mensajeId, nuevoMensaje, { new: true } );
        res.status(200).json({
            ok: true,
            mensaje: mensajeActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del mensaje'
        })
    }
}

const eliminarMensaje = async ( req, res = response ) => {
    
    const mensajeId = req.params.id;

    try {

        const mensaje = await Mensaje.findById( mensajeId );
        if ( !mensaje ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el mensaje para eliminar'
            });
        }
 
        const mensajeEliminado = await Mensaje.findByIdAndDelete( mensajeId );
        res.status(200).json({
            ok: true,
            mensaje: mensajeEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al mensaje'
        })
    }
}

module.exports = {
    obtenerMensajes,
    agregarMensaje,
    actualizarMensaje,
    eliminarMensaje,
}