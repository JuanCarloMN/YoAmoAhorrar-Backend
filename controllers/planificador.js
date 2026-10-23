const { response } = require("express");
const Planificador = require("../modelos/Planificador");

const obtenerPlanificadores = async ( req, res = response ) => {
    try {

        const planificadores = await Planificador.find();

        res.status(200).json({
            ok: true,
            planificadores
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los planificadores'
        })
    }
}

const agregarPlanificador = async ( req, res = response ) => {
    
    const planificador = new Planificador( req.body );

    try {

        const planificadorGuardado = await planificador.save();

        res.status(201).json({
            ok: true,
            planificador: planificadorGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar al planificador'
        })
    }
}

const actualizarPlanificador = async ( req, res = response ) => {

    const planificadorId = req.params.id;
    const uid = req.uid;

    try {

        const planificador = await Planificador.findById( planificadorId );

        if ( !planificador ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el planificador para actualizar'
            });
        }

        const nuevoPlanificador = {
            ...req.body,
        }
        
        const planificadorActualizado = await Planificador.findByIdAndUpdate( planificadorId, nuevoPlanificador, { new: true } );
        res.status(200).json({
            ok: true,
            planificador: planificadorActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del planificador'
        })
    }
}

const eliminarPlanificador = async ( req, res = response ) => {
    
    const planificadorId = req.params.id;

    try {

        const planificador = await Planificador.findById( planificadorId );

        if ( !planificador ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el planificador para eliminar'
            });
        }
 
        const planificadorEliminado = await Planificador.findByIdAndDelete( planificadorId );
        res.status(200).json({
            ok: true,
            planificador: planificadorEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al planificador'
        })
    }
}

module.exports = {
    actualizarPlanificador,
    agregarPlanificador,
    eliminarPlanificador,
    obtenerPlanificadores,
}