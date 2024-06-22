const { response } = require("express");
const Evento = require('../models/Evento');

const obtenerEventos = async ( req, res = response ) => {
    try {

        const eventos = await Evento.find().populate('usuario', 'nombre');

        res.status(200).json({
            ok: true,
            eventos
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los eventos'
        })
    }
}

const crearEvento = async ( req, res = response ) => {
    const evento = new Evento( req.body );

    try {

        evento.usuario = req.uid;
        const eventoGuardado = await evento.save();

        res.status(201).json({
            ok: true,
            evento: eventoGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al crear el evento'
        })
    }
}

const actualizarEvento = async ( req, res = response ) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById( eventoId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el evento para actualizar'
            });
        }

        if ( evento.usuario.toString() != uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'El usuario no está autorizado para actualizar el evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            usuario: uid
        }
        
        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true} );
        res.status(200).json({
            ok: true,
            evento: eventoActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar el evento'
        })
    }
}

const eliminarEvento = async ( req, res = response ) => {
    
    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById( eventoId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el evento para eliminar'
            });
        }

        if ( evento.usuario.toString() != uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'El usuario no está autorizado para eliminar el evento'
            });
        }
 
        const eventoEliminado = await Evento.findByIdAndDelete( eventoId );
        res.status(200).json({
            ok: true,
            evento: eventoEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar el evento'
        })
    }
}


module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}
// {
//     ok: true,
//     msg: 'Obtener eventos'
// }