//carregando os modulos
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
//const mongoose = require("mongoose");

//configuração
  //body-parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  //handlebars
  app.engine("handlebars", handlebars({defaultLayout: "main"}));
  app.set("view engine", "handlebars");

//rotas

//outros
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

