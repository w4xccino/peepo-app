const sequelize = require("./utils/database");
const user = require("./models/User");
const express = require("express");
const cors = require("cors");

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

  user.sync().then(() => {
    user
      .findAll({ where: { email: values[0], password: values[1] } })
      .then((data) => {
        if (Object.keys(data).length != 0) {
          // res.send(`oh yeah, usuario logeado con ${values[0]} y ${values[1]}`);
          res.send("true");
          console.log(data);
        } else {
          res.send("Usuario no encontrado");
        }
      })
      .catch((err) => {
        res.send("ningun usuario encontrado", err);
      });
  });
});

//register api
app.post("/api/register", (req, res) => {
  let { name, lastname, email, password, address, phone } = req.body;
  let values = [name, lastname, email, password, address, phone];

  user
    .sync()
    .then(() => {
      const USER = user.build({
        name: values[0],
        last_name: values[1],
        email: values[2],
        password: values[3],
        address: values[4],
        phone: values[5],
      });
      USER.save();
    })
    .then((data) => {
      console.log("Usuario agregado a la base de datos");
      res.send("Usuario agregado a la base de datos");
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(4000, () =>
  console.log("Servidor iniciado en http://localhost:4000")
);

/*Para crear el modelo, podemos utilizar una de las siguientes formas:
Método sync(): Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, no lo sobrescribirá.
sync ({force: true}) Método: Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, lo sobrescribirá.*/

//sequelize.sync({force:true})