const sequelize = require("./utils/database");
const User = require("./models/user");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors()); //important

app.post("/api/login", (req, res) => {
  //theres a bug here
  let { email, password } = req.body;
  let values = [email, password];
  // const values = { nombre: "Diego", email: "jasdjkla@gmail.com" };
  // res.send(200, { ...values });
  console.log(values);
  res.send("pa eso?");
});

app.post("/api/register", (req, res) => {
  //theres a bug here
  let { email, password } = req.body;
  let values = [email, password];
  // const values = { nombre: "Diego", email: "jasdjkla@gmail.com" };
  // res.send(200, { ...values });
  console.log(values);
});

sequelize.sync();
app.listen(4000, () =>
  console.log("Servidor iniciado en http://localhost:4000")
);

/*Para crear el modelo, podemos utilizar una de las siguientes formas:
Método sync(): Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, no lo sobrescribirá.
sync ({force: true}) Método: Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, lo sobrescribirá.*/
sequelize.sync();

//sequelize.sync({force:true})
