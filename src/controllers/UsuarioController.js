const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const authConfig = require('../config/auth')


class UsuarioController {

//==========================================================================================================

        async index(req, res){

            try{
                const usuarios = await Usuario.find({}).sort("-createdAt");
                return  res.status(200).json(usuarios);
            }catch (msg){
                return res.status(400).send({msg})
            }
        }

//==========================================================================================================

        async store(req, res){

            const { email } = req.body;

            try{

                if(await Usuario.findOne({ email }))
                    return res.status(400).send({ msg: 'Usuario ja registrado!'})
                    
                const usuario = await Usuario.create(req.body);
                usuario.password = undefined;
                const token = jwt.sign({ id: usuario.id }, authConfig.secret, { expiresIn: 86400} )

                return res.status(200).json({usuario, token})

            }catch (msg){
                return res.status(400).send({msg})
            }
        }

//==========================================================================================================

        async update(req, res){ 

            const hash = await bcrypt.hash(req.body.password, 10)
            req.body.password = hash;

            try{
                await  Usuario.findByIdAndUpdate(req.params.id, {$set: req.body})
                res.status(200).send({msg : "Usuario atualizado com sucesso!"})
            }catch (msg){
                res.status(400).send({msg}) 
            }
        }

//==========================================================================================================

        async delete(req, res){ 

            try{
                await  Usuario.findByIdAndDelete(req.params.id, {$set: req.body})
                res.status(200).send({msg : "O usuario foi deletado com sucesso!"})
            }catch (msg){
                res.status(400).send({msg}) 
            }
        }

//==========================================================================================================

}


module.exports = new UsuarioController();