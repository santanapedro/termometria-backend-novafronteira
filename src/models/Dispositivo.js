const mongoose = require('mongoose')

const Dispositivo = new mongoose.Schema({

    nome : {
        type: String,
        unique: true,
        required: true,
        uppercase: true,
    },

    local : {
        type: String,
        required: true,
        uppercase: true,
    },

    tipo : {
        type: String,
        required: true,
        uppercase: true,
    },

    token : {
        type: String,
        required: true,
        uppercase: true,
    },



},{
    timestamps: true
})

module.exports = mongoose.model("Dispositivo", Dispositivo);