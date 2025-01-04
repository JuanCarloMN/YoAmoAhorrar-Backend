const { response } = require("express");
const Blog = require("../modelos/Blog");

const obtenerBlogs = async ( req, res = response ) => {
    try {

        const blogs = await Blog.find();

        res.status(200).json({
            ok: true,
            blogs
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los Blogs'
        })
    }
}

const agregarBlog = async ( req, res = response ) => {
    
    const blog = new Blog( req.body );

    try {

        const blogGuardado = await blog.save();

        res.status(201).json({
            ok: true,
            blog: blogGuardado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al agregar al blog'
        })
    }
}

const actualizarBlog = async ( req, res = response ) => {

    const blogId = req.params.id;
    const uid = req.uid;

    try {

        const blog = await Blog.findById( blogId );

        if ( !blog ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el blog para actualizar'
            });
        }

        const nuevoBlog = {
            ...req.body,
        }
        
        const blogActualizado = await Blog.findByIdAndUpdate( blogId, nuevoBlog, { new: true } );
        res.status(200).json({
            ok: true,
            blog: blogActualizado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al actualizar la información del blog'
        })
    }
}

const eliminarBlog = async ( req, res = response ) => {
    
    const blogId = req.params.id;

    try {

        const blog = await Blog.findById( blogId );

        if ( !blog ) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el blog para eliminar'
            });
        }
 
        const blogEliminado = await Blog.findByIdAndDelete( blogId );
        res.status(200).json({
            ok: true,
            blog: blogEliminado
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al eliminar al blog'
        })
    }
}

module.exports = {
    obtenerBlogs,
    agregarBlog,
    actualizarBlog,
    eliminarBlog,
}