const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Configurações
app.set("port", process.env.PORT || 4001);

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//rotas
app.use("/", require("./routes"));

module.exports = app;
