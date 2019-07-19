const mongoose = require("mongoose");

const Leitura = new mongoose.Schema(
  {
    dispositivo: {
      type: String,
      required: true,
      lowercase: true
    },

    data: {
      type: Date,
      required: true
    },

    //=================================================================

    setor: {
      type: String,
      required: true,
      lowercase: true
    },

    umidade: {
      type: Number
    },

    //=================================================================

    temperatura: {
      type: Number
    }

    //=================================================================
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Leitura", Leitura);
