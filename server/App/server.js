const express = require('express');
const app = express()
const port = 3000
//importar la conexion
const { connection } = require('./dataBase/conexionData');

//rutas
app.use(require('../App/route'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
  connection.sync({force:false}).then(()=>{
      console.log("Conexion exitosa a la base de datos");
  });
})