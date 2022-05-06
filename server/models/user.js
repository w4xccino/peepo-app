// Inclimos el modulo sequelize
const Sequelize = require("sequelize");

// Requerimos de la conexion de la BD
const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  // Columna name
  name: { type: Sequelize.STRING, allowNull: false },
  last_name: { type: Sequelize.STRING, allowNull: false },
  // Columna, email
  email: { type: Sequelize.STRING, allowNull: false },
  // columna, password
  password: { type: Sequelize.STRING, allowNull: false },
  // columna, direccion
  address: { type: Sequelize.STRING, allowNull: true },
  //columna, telefono
  telefono: { type: Sequelize.STRING, allowNull: true },
});

User.sync()
  .then(() => {
    console.log("table and model synced successful ");
  })
  .catch((err) => {
    console.log("Error syncing the table and model", err);
  });

// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.

module.exports = User;
