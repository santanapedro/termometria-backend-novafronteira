const Leitura = require("../models/Leitura");
var moment = require("moment");
moment.locale("pt-BR");

class GraficoController {
  //==========================================================================================================

  async buscaUltimo(req, res) {
    try {
      const ultimaS1 = await Leitura.findOne({
        $where: `this.setor == "setor-01"`
      }).sort({ data: -1 });

      const ultimaS2 = await Leitura.findOne({
        $where: `this.setor == "setor-02"`
      }).sort({ data: -1 });

      const ultimaS3 = await Leitura.findOne({
        $where: `this.setor == "setor-03"`
      }).sort({ data: -1 });

      const data = { ultimaS1, ultimaS2, ultimaS3 };

      return res.status(200).json(data);
    } catch (msg) {
      return res.status(400).send({ msg });
    }
  }

  //==========================================================================================================

  async hora(req, res) {
    try {
      var hora;
      return res.status(200).json(data);
    } catch (msg) {
      return res.status(400).send({ msg });
    }
  }
  //==========================================================================================================

  async setor(req, res) {
    try {
      var data = req.params.data;

      var labels = ["SETOR01", "SETOR02", "SETOR03"];

      var datasets = [
        {
          label: "TEMP MAXIMA",
          data: [],
          backgroundColor: "rgba(245, 74, 85, 0.7)",
          borderWidth: 1
        },
        {
          label: "TEMP MINIMA",
          data: [],
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        },
        {
          label: "UMID MAXIMA",
          data: [],
          backgroundColor: "rgba(90, 173, 246, 0.7)",
          borderWidth: 1
        },
        {
          label: "UMID MINIMA",
          data: [],
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderWidth: 1
        }
      ];

      //============================================================== SETOR - 01

      const TemperaturaMaximaS1 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-01"
      }).sort({ temperatura: -1 });

      const TemperaturaMinimaS1 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-01"
      }).sort({ temperatura: 1 });

      const UmidadeMaximaS1 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-01"
      }).sort({ umidade: -1 });

      const UmidadeMinimaS1 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-01"
      }).sort({ umidade: 1 });

      if (TemperaturaMaximaS1) {
        datasets[0].data.push(TemperaturaMaximaS1.temperatura);
      } else {
        datasets[0].data.push(0);
      }

      if (TemperaturaMinimaS1) {
        datasets[1].data.push(TemperaturaMinimaS1.temperatura);
      } else {
        datasets[1].data.push(0);
      }

      if (UmidadeMaximaS1) {
        datasets[2].data.push(UmidadeMaximaS1.umidade);
      } else {
        datasets[2].data.push(0);
      }

      if (UmidadeMinimaS1) {
        datasets[3].data.push(UmidadeMinimaS1.umidade);
      } else {
        datasets[3].data.push(0);
      }

      //============================================================== SETOR - 02

      const TemperaturaMaximaS2 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-02"
      }).sort({ temperatura: -1 });

      const TemperaturaMinimaS2 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-02"
      }).sort({ temperatura: 1 });

      const UmidadeMaximaS2 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-02"
      }).sort({ umidade: -1 });

      const UmidadeMinimaS2 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-02"
      }).sort({ umidade: 1 });

      if (TemperaturaMaximaS2) {
        datasets[0].data.push(TemperaturaMaximaS2.temperatura);
      } else {
        datasets[0].data.push(0);
      }

      if (TemperaturaMinimaS2) {
        datasets[1].data.push(TemperaturaMinimaS2.temperatura);
      } else {
        datasets[1].data.push(0);
      }

      if (UmidadeMaximaS2) {
        datasets[2].data.push(UmidadeMaximaS2.umidade);
      } else {
        datasets[2].data.push(0);
      }

      if (UmidadeMinimaS2) {
        datasets[3].data.push(UmidadeMinimaS2.umidade);
      } else {
        datasets[3].data.push(0);
      }

      //============================================================== SETOR - 02

      const TemperaturaMaximaS3 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-03"
      }).sort({ temperatura: -1 });

      const TemperaturaMinimaS3 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-03"
      }).sort({ temperatura: 1 });

      const UmidadeMaximaS3 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-03"
      }).sort({ umidade: -1 });

      const UmidadeMinimaS3 = await Leitura.findOne({
        $where: `this.data.toJSON().slice(0, 10) == "${data}"`,
        setor: "setor-03"
      }).sort({ umidade: 1 });

      if (TemperaturaMaximaS3) {
        datasets[0].data.push(TemperaturaMaximaS3.temperatura);
      } else {
        datasets[0].data.push(0);
      }

      if (TemperaturaMinimaS3) {
        datasets[1].data.push(TemperaturaMinimaS3.temperatura);
      } else {
        datasets[1].data.push(0);
      }

      if (UmidadeMaximaS3) {
        datasets[2].data.push(UmidadeMaximaS3.umidade);
      } else {
        datasets[2].data.push(0);
      }

      if (UmidadeMinimaS3) {
        datasets[3].data.push(UmidadeMinimaS3.umidade);
      } else {
        datasets[3].data.push(0);
      }

      var dataBar = { labels, datasets };

      return res.status(200).json(dataBar);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ err });
    }
  }

  //==================================================================================================

  async barChart(req, res) {
    var labels = [];

    var datasets = [
      {
        label: "TEMP MAXIMA",
        data: [],
        backgroundColor: "rgba(245, 74, 85, 0.7)",
        borderWidth: 1
      },
      {
        label: "TEMP MINIMA",
        data: [],
        backgroundColor: "rgba(245, 74, 85, 0.5)",
        borderWidth: 1
      },
      {
        label: "UMID MAXIMA",
        data: [],
        backgroundColor: "rgba(90, 173, 246, 0.7)",
        borderWidth: 1
      },
      {
        label: "UMID MINIMA",
        data: [],
        backgroundColor: "rgba(90, 173, 246, 0.5)",
        borderWidth: 1
      }
    ];

    try {
      for (var i = 1; i <= 7; i++) {
        var dia = new Date(moment().subtract(i, "days"));

        labels.push(
          moment(dia)
            .add(1, "days")
            .format("DD/MM/YYYY")
        );

        const date = moment(dia)
          .add(1, "days")
          .format("YYYY-MM-DD");

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

        if (TemperaturaMaxima) {
          datasets[0].data.push(TemperaturaMaxima.temperatura);
        } else {
          datasets[0].data.push(0);
        }

        if (TemperaturaMinima) {
          datasets[1].data.push(TemperaturaMinima.temperatura);
        } else {
          datasets[1].data.push(0);
        }

        if (UmidadeMaxima) {
          datasets[2].data.push(UmidadeMaxima.umidade);
        } else {
          datasets[2].data.push(0);
        }

        if (UmidadeMinima) {
          datasets[3].data.push(UmidadeMinima.umidade);
        } else {
          datasets[3].data.push(0);
        }
      }

      var dataBar = { labels, datasets };

      return res.status(200).json(dataBar);
    } catch (err) {
      console.log(err);
      return res.send(err);
    }
  }

  //==================================================================================================
}

module.exports = new GraficoController();
