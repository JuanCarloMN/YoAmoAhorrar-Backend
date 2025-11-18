const { response } = require("express");
const Cliente = require("../modelos/Cliente");

const obtenerClientes = async ( req, res = response ) => {
    try {

        const clientes = await Cliente.find();

        res.status(200).json({
            ok: true,
            clientes
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los clientes'
        })
    }
}

const agregarCliente = async ( req, res = response ) => {
    
    const cliente = new Cliente( req.body );

    try {

        const clienteGuardado = await cliente.save();

        res.status(201).json({
            ok: true,
            cliente: clienteGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar al cliente'
        })
    }
}

const actualizarCliente = async ( req, res = response ) => {

    const clienteId = req.params.id;
    const uid = req.uid;

    try {

        const cliente = await Cliente.findById( clienteId );

        if ( !cliente ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el cliente para actualizar'
            });
        }

        const nuevoCliente = {
            ...req.body,
        }
        
        const clienteActualizado = await Cliente.findByIdAndUpdate( clienteId, nuevoCliente, { new: true } );
        res.status(200).json({
            ok: true,
            cliente: clienteActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del cliente'
        })
    }
}

const buscarCliente = async ( req, res = response ) => {

    try {

        const cliente = await Cliente.find({ clienteRFC: req.params.id });

        if ( !cliente ) {
            return res.status(204).json({
                ok: false,
                msg: 'No se encontró el cliente'
            });
        }

        if ( cliente.length === 0 ){
            return res.status(204).json({
                ok: false,
                msg: 'No se encontró el cliente'
            });
        }
        
        return res.status(200).json({
            ok: true,
            cliente: cliente
        })

    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al buscar la información del cliente'
        })
    }
}

const eliminarCliente = async ( req, res = response ) => {
    
    const clienteId = req.params.id;

    try {

        const cliente = await Cliente.findById( clienteId );

        if ( !cliente ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el cliente para eliminar'
            });
        }
 
        const clienteEliminado = await Cliente.findByIdAndDelete( clienteId );
        res.status(200).json({
            ok: true,
            cliente: clienteEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al cliente'
        })
    }
}

module.exports = {
    actualizarCliente,
    agregarCliente,
    buscarCliente,
    eliminarCliente,
    obtenerClientes,
}