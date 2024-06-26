const { response } = require("express");
const Prospecto = require("../modelos/Prospecto");

const obtenerProspectos = async ( req, res = response ) => {
    try {

        const prospectos = await Prospecto.find();

        res.status(200).json({
            ok: true,
            prospectos
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los prospectos'
        })
    }
}

const agregarProspecto = async ( req, res = response ) => {
    const prospecto = new Prospecto( req.body );

    try {

        const prospectoGuardado = await prospecto.save();

        res.status(201).json({
            ok: true,
            prospecto: prospectoGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar al prospecto'
        })
    }
}

const actualizarProspecto = async ( req, res = response ) => {

    const prospectoId = req.params.id;
    const uid = req.uid;

    try {

        const prospecto = await Prospecto.findById( prospectoId );

        if ( !prospecto ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el prospecto para actualizar'
            });
        }

        const nuevoProspecto = {
            ...req.body,
        }
        
        const prospectoActualizado = await Prospecto.findByIdAndUpdate( prospectoId, nuevoProspecto, { new: true } );
        res.status(200).json({
            ok: true,
            prospecto: prospectoActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del prospecto'
        })
    }
}

const eliminarProspecto = async ( req, res = response ) => {
    
    const prospectoId = req.params.id;

    try {

        const prospecto = await Prospecto.findById( prospectoId );

        if ( !prospecto ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el prospecto para eliminar'
            });
        }
 
        const prospectoEliminado = await Prospecto.findByIdAndDelete( prospectoId );
        res.status(200).json({
            ok: true,
            prospecto: prospectoEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al prospecto'
        })
    }
}

module.exports = {
    obtenerProspectos,
    agregarProspecto,
    actualizarProspecto,
    eliminarProspecto,
}