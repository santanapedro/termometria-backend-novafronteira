const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Usuario = new mongoose.Schema({

    nome : {
        type: String,
        unique: true,
        required: true,
        uppercase: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    tipo: {
        type: String,
        required: true,
        upercase: true,
    },
    
    telefone: {
        type: String,
        upercase: true,
    },

    codigo: {
        type: String,
        upercase: true,
    },

    password: {
        type: String,
        required: true,
        select: false,
    },

},{
    timestamps: true
})

Usuario.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash;
    next();
})

module.exports = mongoose.model("Usuario", Usuario);