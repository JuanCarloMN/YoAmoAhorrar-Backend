const { response } = require("express");
const Poliza = require("../modelos/Poliza");

const obtenerPolizas = async ( req, res = response ) => {
    try {

        const polizas = await Poliza.find();

        res.status(200).json({
            ok: true,
            polizas
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener las pólizas'
        })
    }
}

const agregarPoliza = async ( req, res = response ) => {
    
    const poliza = new Poliza( req.body );

    try {

        const polizaGuardada = await poliza.save();

        res.status(201).json({
            ok: true,
            poliza: polizaGuardada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar la póliza'
        })
    }
}

const actualizarPoliza = async ( req, res = response ) => {

    const polizaId = req.params.id;
    const uid = req.uid;

    try {

        const poliza = await Poliza.findById( polizaId );

        if ( !poliza ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la póliza para actualizar'
            });
        }

        const nuevaPoliza = {
            ...req.body,
        }
        
        const polizaActualizada = await Poliza.findByIdAndUpdate( polizaId, nuevaPoliza, { new: true } );
        res.status(200).json({
            ok: true,
            poliza: polizaActualizada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información de la póliza'
        })
    }
}

const buscarPoliza = async ( req, res = response ) => {

    try {

        const poliza = await Poliza.find({ polizaClave: req.params.id });

        if ( !poliza ) {
            return res.status(204).json({
                ok: true,
                msg: 'No se encontró la póliza'
            });
        }

        if ( poliza.length === 0 ){
            return res.status(204).json({
                ok: true,
                msg: 'No se encontró la póliza'
            });
        }
        
        return res.status(200).json({
            ok: true,
            poliza: poliza
        })

    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al buscar la información de la póliza'
        })
    }
}

const eliminarPoliza = async ( req, res = response ) => {
    
    const polizaId = req.params.id;

    try {

        const poliza = await Poliza.findById( polizaId );

        if ( !poliza ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la póliza a eliminar'
            });
        }
 
        const polizaEliminada = await Poliza.findByIdAndDelete( polizaId );
        res.status(200).json({
            ok: true,
            poliza: polizaEliminada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar la póliza'
        })
    }
}

module.exports = {
    actualizarPoliza,
    agregarPoliza,
    buscarPoliza,
    eliminarPoliza,
    obtenerPolizas,
}