const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

//importar la conexion
const { connection } = require("./dataBase/conexionData");
const { usuario } = require("./dataBase/conexionData");

app.use(express.json()); //middleware
app.use(cors()); //important

connection
  .sync({force:true})
  .then(() => {
    console.log("Connection to Database Successful!");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

//rutas
app.use(require("../App/route"));

//login api
app.post("/api/login", (req, res) => {
  let { email, password } = req.body;
  let values = [email, password];

  usuario.sync().then(() => {
    usuario
      .findAll({ where: { email: values[0], contrasena: values[1] } })
      .then((data) => {
        if (Object.keys(data).length != 0) {
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

  usuario
    .sync()
    .then(() => {
      const USER = usuario.build({
        nombre: values[0],
        apellido: values[1],
        email: values[2],
        contrasena: values[3],
        direccion: values[4],
        telefono: values[5],
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

app.listen(port, () =>
  console.log("Servidor iniciado en http://localhost:4000")
);

/*Para crear el modelo, podemos utilizar una de las siguientes formas:
Método sync(): Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, no lo sobrescribirá.
sync ({force: true}) Método: Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, lo sobrescribirá.*/

// connection.sync({ force: true });
