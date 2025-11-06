const { response } = require("express");

const obtenerIndicadores = async ( req, res = response ) => {
    try {

        const mensajes = await Mensaje.find();
        res.status(200).json({
            ok: true,
            mensajes
        })
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Problemas al obtener los mensajes'
        })
    }
}

module.exports = {
    obtenerIndicadores,
}

// endpoint en tu servidor (por ejemplo: /api/proxy)
app.get('/api/proxy', async (req, res) => {
  const response = await fetch('https://api.externa.com/endpoint')
  const body = await response.text()
  res.set('Content-Type', response.headers.get('content-type') || 'application/json')
  res.send(body)
})