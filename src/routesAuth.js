const express = require('express')

const routesAuth = express.Router()
const authMiddleware = require ('./middleware/auth')

routesAuth.use(authMiddleware)

//=========================================================================================

    const UsuarioController = require ('./controllers/UsuarioController')

    routesAuth.post("/usuario", UsuarioController.store)
    routesAuth.put("/usuario/:id", UsuarioController.update)
    routesAuth.delete("/usuario/:id", UsuarioController.delete)
    routesAuth.get("/usuario", UsuarioController.index)

//=========================================================================================

    const DispositivoController = require ('./controllers/DispositivoController')

    routesAuth.post("/dispositivo", DispositivoController.store)
    routesAuth.put("/dispositivo/:id", DispositivoController.update)
    routesAuth.delete("/dispositivo/:id", DispositivoController.delete)
    routesAuth.get("/dispositivo", DispositivoController.index)

//=========================================================================================

module.exports = routesAuth;
