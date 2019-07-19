const Leitura = require("../models/Leitura");
const Dispositivo = require("../models/Dispositivo");
const Log = require("../models/Log");

class LeituraController {
  //==================================================================================================

  async store(req, res) {
    try {
      const _id = req.query.dispositivo;

      await Dispositivo.findById(_id, function(err) {
        if (err) return res.status(400).send("ID do dispositivo inexistente!");
      });

      await Leitura.create(req.query);
      return res.status(200).send("DADO GRAVADO");
    } catch (msg) {
      return res.status(400).send("ERRO AO GRAVAR");
    }
  }

  //==================================================================================================

  async leitura(req, res) {
    try {
      const _id = req.query.dispositivo;

      await Dispositivo.findById(_id, function(err) {
        if (err) return res.status(400).send("ID do dispositivo inexistente!");
      });

      if (req.query.temperatura === "nan" || req.query.umidade === "nan") {
        var gravaLog = {
          data: req.query.data,
          tipo: "LEITURA",
          texto: `${req.query.data} - FALHA NA LEITURA DO ${req.query.setor}`
        };
        await Log.create(gravaLog);
        console.log("Falha na leitura do Sengor: " + req.query.setor);
        return res.status(200).send("DADO GRAVADO");
      } else {
        req.io.emit("leitura", req.query);
        await Leitura.create(req.query);
        return res.status(200).send("DADO GRAVADO");
      }
    } catch (msg) {
      console.log(msg);
      return res.status(400).send("ERRO AO GRAVAR");
    }
  }

  //==================================================================================================

  async temperatura(req, res) {
    const date = "2019-07-17";

    try {
      const TemperaturaMaxima = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${date}"`
      }).sort({ temperatura: -1 });

      const TemperaturaMinima = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${date}"`
      }).sort({ temperatura: 1 });

      const UmidadeMaxima = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${date}"`
      }).sort({ umidade: -1 });

      const UmidadeMinima = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${date}"`
      }).sort({ umidade: 1 });

      const data = {
        TemperaturaMaxima,
        TemperaturaMinima,
        UmidadeMaxima,
        UmidadeMinima
      };
      return res.json(data);
    } catch (msg) {
      res.status(400).send({ msg });
    }
  }

  //==================================================================================================

  async data(req, res) {
    try {
      const date = "2019-07-16";

      const maxima = await Leitura.find({
        $where: `this.data.toJSON().slice(0, 10) == "${date}"`
      });

      return res.json(maxima);
    } catch (msg) {
      res.status(400).send({ msg });
    }
  }
  //==================================================================================================
}

module.exports = new LeituraController();
