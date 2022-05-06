const sequelize = require("./utils/database");
const user = require("./models/User");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(express.json()); //middleware
app.use(cors()); //important

//testing db connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to Database Successful!");
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });

//login api
app.post("/api/login", (req, res) => {
  let { email, password } = req.body;
  let values = [email, password];
  if (values[0] == "epcbox123@gmail.com" || values[1] == "12345678") {
    res.send("hala pa eso?");
  }
});

//register api
app.post("/api/register", (req, res) => {
  let { email, password } = req.body;
  let values = [email, password];
  console.log(values);
});

app.listen(4000, () =>
  console.log("Servidor iniciado en http://localhost:4000")
);

/*Para crear el modelo, podemos utilizar una de las siguientes formas:
Método sync(): Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, no lo sobrescribirá.
sync ({force: true}) Método: Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, lo sobrescribirá.*/

//sequelize.sync({force:true})
