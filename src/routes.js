const express = require("express");
const routes = express.Router();

//=========================================================================================

const LoginController = require("./controllers/LoginController");

routes.post("/autentica", LoginController.autentica);
routes.post("/valida", LoginController.valida);

//=========================================================================================

const LeituraController = require("./controllers/LeituraController");

//routes.get("/leitura", LeituraController.store)
routes.get("/leitura", LeituraController.leitura);
routes.get("/temperatura", LeituraController.temperatura);
routes.get("/data", LeituraController.data);

//=========================================================================================

const GraficoController = require("./controllers/GraficoController");

routes.get("/grafico", GraficoController.barChart);
routes.get("/ultimo", GraficoController.buscaUltimo);
routes.get("/setor/:data", GraficoController.setor);

//=========================================================================================

module.exports = routes;
