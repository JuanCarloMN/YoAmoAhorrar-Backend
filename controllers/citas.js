const { response } = require("express");
const Cita = require("../modelos/Cita");

const obtenerCitas = async ( req, res = response ) => {
    try {

        const citas = await Cita.find();

        res.status(200).json({
            ok: true,
            citas
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener las Citas'
        })
    }
}

const agregarCita = async ( req, res = response ) => {
    
    const cita = new Cita( req.body );

    try {

        const citaGuardada = await cita.save();

        res.status(201).json({
            ok: true,
            cita: citaGuardada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar la Cita'
        })
    }
}

const actualizarCita = async ( req, res = response ) => {

    const citaId = req.params.id;

    try {

        const cita = await Cita.findById( citaId );

        if ( !cita ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la Cita para actualizar'
            });
        }

        const nuevaCita = {
            ...req.body,
        }
        
        const citaActualizada = await Cita.findByIdAndUpdate( citaId, nuevaCita, { new: true } );
        res.status(200).json({
            ok: true,
            cita: citaActualizada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información de la Cita'
        })
    }
}

const eliminarCita = async ( req, res = response ) => {
    
    const citaId = req.params.id;

    try {

        const cita = await Cita.findById( citaId );

        if ( !cita ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la Cita para eliminar'
            });
        }
 
        const citaEliminada = await Cita.findByIdAndDelete( citaId );
        res.status(200).json({
            ok: true,
            cita: citaEliminada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar la Cita'
        })
    }
}

module.exports = {
    actualizarCita,
    agregarCita,
    eliminarCita,
    obtenerCitas,
}