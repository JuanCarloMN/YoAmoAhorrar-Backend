const { response } = require("express");
const Noticia = require("../modelos/Noticia");

const obtenerNoticias = async ( req, res = response ) => {
    try {

        const noticias = await Noticia.find();

        res.status(200).json({
            ok: true,
            noticias
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener las Noticias'
        })
    }
}

const agregarNoticia = async ( req, res = response ) => {
    
    const noticia = new Noticia( req.body );

    try {

        const noticiaGuardada = await noticia.save();

        res.status(201).json({
            ok: true,
            noticia: noticiaGuardada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar la noticia'
        })
    }
}

const actualizarNoticia = async ( req, res = response ) => {

    const noticiaId = req.params.id;
    const uid = req.uid;

    try {

        const noticia = await Noticia.findById( noticiaId );

        if ( !noticia ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la noticia para actualizar'
            });
        }

        const nuevaNoticia = {
            ...req.body,
        }
        
        const noticiaActualizada = await Noticia.findByIdAndUpdate( noticiaId, nuevaNoticia, { new: true } );
        res.status(200).json({
            ok: true,
            noticia: noticiaActualizada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información de la noticia'
        })
    }
}

const eliminarNoticia = async ( req, res = response ) => {
    
    const noticiaId = req.params.id;

    try {

        const noticia = await Noticia.findById( noticiaId );

        if ( !noticia ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la noticia para eliminar'
            });
        }
 
        const noticiaEliminada = await Noticia.findByIdAndDelete( noticiaId );
        res.status(200).json({
            ok: true,
            noticia: noticiaEliminada
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar la noticia'
        })
    }
}

module.exports = {
    actualizarNoticia,
    agregarNoticia,
    eliminarNoticia,
    obtenerNoticias,
}