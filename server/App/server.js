const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

//importar la conexion
const { connection } = require("./dataBase/conexionData");
const { usuario, producto, categoria } = require("./dataBase/conexionData");

app.use(express.json()); //middleware
app.use(cors()); //important

connection
  .authenticate()
  .then(() => {
    console.log("Connection to Database Successful!");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
//{force:true}

//rutas
// app.use(require("../App/route"));

//login api
app.post("/api/login", (req, res) => {
  let { email, password } = req.body;
  let values = [email, password];

  usuario.sync().then(() => {
    usuario
      .findAll({ where: { email: values[0], contrasena: values[1] } })
      .then((data) => {
        if (Object.keys(data).length != 0) {
          let list = [
            "true",
            data[0].telefono,
            data[0].nombre,
            data[0].email,
            data[0].direccion,
          ];
          res.send(list);
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

//API DE LISTADO_DATOS_USUARIO_LOGUEADOO
app.get("/api/user", (req, res) => {
  usuario.sync().then(() => {
    usuario
      .findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(500).send(err);
      });
  });
});

//producto API
app.get("/api/productos", (req, res) => {
  producto.sync().then(() => {
    producto
      .findAll()
      .then((data) => {
        res.send(data);
        // console.log(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
});

app.get("/api/producto/:id", (req, res) => {
  producto.sync().then(() => {
    producto
      .findAll({ where: { id: req.params.id } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
});


/*app.get("/api/categorias/:id", (req, res) => {
  categoria.sync().then(() => {
    categoria
      .findAll({ where: { id: req.params.id } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
});*/

//Filtrado API
app.get("/api/categorias", (req, res) => {
  categoria.sync().then(() => {
    categoria
      .findAll()
      .then((data) => {
        res.send(data);
        //console.log(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
});


app.listen(port, () =>
  console.log("Servidor iniciado en http://localhost:" + port)
);

/*Para crear el modelo, podemos utilizar una de las siguientes formas:
Método sync(): Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, no lo sobrescribirá.
sync ({force: true}) Método: Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, lo sobrescribirá.*/

// connection.sync({ force: true });
