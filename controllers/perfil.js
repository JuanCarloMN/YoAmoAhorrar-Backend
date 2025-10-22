const { response } = require("express");
const Perfil = require("../modelos/Perfil");

const obtenerPerfiles = async ( req, res = response ) => {
    try {

        const perfiles = await Perfil.find();

        res.status(200).json({
            ok: true,
            perfiles
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los perfiles'
        })
    }
}

const agregarPerfil = async ( req, res = response ) => {
    
    const perfil = new Perfil( req.body );

    try {

        const perfilGuardado = await perfil.save();

        res.status(201).json({
            ok: true,
            perfil: perfilGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar al perfil'
        })
    }
}

const actualizarPerfil = async ( req, res = response ) => {

    const perfilId = req.params.id;
    const uid = req.uid;

    try {

        const perfil = await Perfil.findById( perfilId );

        if ( !perfil ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el perfil para actualizar'
            });
        }

        const nuevoPerfil = {
            ...req.body,
        }
        
        const perfilActualizado = await Perfil.findByIdAndUpdate( perfilId, nuevoPerfil, { new: true } );
        res.status(200).json({
            ok: true,
            perfil: perfilActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del perfil'
        })
    }
}

const eliminarPerfil = async ( req, res = response ) => {
    
    const perfilId = req.params.id;

    try {

        const perfil = await Perfil.findById( perfilId );

        if ( !perfil ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el perfil para eliminar'
            });
        }
 
        const perfilEliminado = await Perfil.findByIdAndDelete( perfilId );
        res.status(200).json({
            ok: true,
            perfil: perfilEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al perfil'
        })
    }
}

module.exports = {
    actualizarPerfil,
    agregarPerfil,
    eliminarPerfil,
    obtenerPerfiles,
}