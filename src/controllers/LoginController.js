const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authConfig = require("../config/auth");

module.exports = {
  //=======================================================================================

  async autentica(req, res) {
    const { email, password } = req.body;

    console.log(req.body);
    const usuario = await Usuario.findOne({ email }).select("+password");

    if (!usuario)
      return res.status(201).send({ error: "Usuario não encontrado!" });

    if (!(await bcrypt.compare(password, usuario.password)))
      return res.status(201).send({ error: "Senha invalida!" });

    usuario.password = undefined;

    const token = jwt.sign({ id: usuario.id }, authConfig.secret, {
      expiresIn: 86400
    });

    return res.send({ usuario, token });
  },

  //=======================================================================================

  async valida(req, res) {
    const token = req.body.token;

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) return res.send(false);
      req.userId = decoded.id;
      return res.send(true);
    });
  }

  //=======================================================================================
};
