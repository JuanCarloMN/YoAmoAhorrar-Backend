
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../modelos/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async ( req, res = response ) => {
    const { nombre, email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
            
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo',
            })
        }

        usuario = new Usuario( req.body );
        
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();

        // Generar Token JWT
        const token = await generarJWT( usuario.id, usuario.nombre );

        // Todo correcto
        res.status(201).json({
            ok: true,
            msg: 'El usuario se registró de manera correcta',
            uid: usuario.id,
            nombre: usuario.nombre,
            token
        })
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
};

const loginUsuario = async ( req, res = response ) => { 
    const { email, password } = req.body;

    try {
        
        let usuario = await Usuario.findOne({ email });
            
        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email',
            })
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );
        
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña es incorrecta',
            })
        }

        // Generar Token JWT
        const token = await generarJWT( usuario.id, usuario.nombre );

        // Todo correcto
        res.status(200).json({
            ok: true,
            msg: 'login',
            uid: usuario.id,
            nombre: usuario.nombre,
            token
        })

    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

};

const revalidarToken = async ( req, res = response ) => {
    const { uid, nombre } = req;
    const token = await generarJWT( uid, nombre );

    res.json({
        ok: true,
        uid,
        nombre,
        token
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};