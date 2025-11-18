const { response } = require("express");
const Nota = require("../modelos/Nota");

const obtenerNotas = async ( req, res = response ) => {
    try {

        const notas = await Nota.find();
        res.status(200).json({
            ok: true,
            notas
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener las notas'
        })
    }
}

const agregarNota = async ( req, res = response ) => {
    
    const nota = new Nota( req.body );
    try {

        const notaGuardada = await nota.save();

        res.status(201).json({
            ok: true,
            nota: notaGuardada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar la nota'
        })
    }
}

const actualizarNota = async ( req, res = response ) => {

    const notaId = req.params.id;
    try {

        const nota = await Nota.findById( notaId );

        if ( !nota ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la nota para actualizar'
            });
        }

        const nuevaNota = {
            ...req.body,
        }
        
        const notaActualizada = await Nota.findByIdAndUpdate( notaId, nuevaNota, { new: true } );
        res.status(200).json({
            ok: true,
            cliente: notaActualizada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información de la nota'
        })
    }
}

const buscarNotas = async ( req, res = response ) => {

    try {

        const notas = await Nota.find({ notaCliente: req.params.id }).sort({ notaFecha: -1 });

        if ( !notas ) {
            return res.status(204).json({
                ok: false,
                msg: 'No se encontraron notas para el cliente'
            });
        }

        if ( notas.length === 0 ){
            return res.status(204).json({
                ok: false,
                msg: 'No se encontraron notas para el cliente'
            });
        }
        
        return res.status(200).json({
            ok: true,
            notas
        })

    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al buscar la información de las notas del cliente'
        })
    }
}

const eliminarNota = async ( req, res = response ) => {
    
    const notaId = req.params.id;
    try {

        const nota = await Nota.findById( notaId );

        if ( !nota ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la nota para eliminar'
            });
        }
 
        const notaEliminada = await Nota.findByIdAndDelete( notaId );
        res.status(200).json({
            ok: true,
            cliente: notaEliminada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar la nota'
        })
    }
}

module.exports = {
    actualizarNota,
    agregarNota,
    buscarNotas,
    eliminarNota,
    obtenerNotas,
}