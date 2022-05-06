// Inclimos el modulo sequelize
const Sequelize = require("sequelize");

// Requerimos de la conexion de la BD
const sequelize = require("../utils/database");

const user = sequelize.define("User", {
  // Columna name
  name: { type: Sequelize.STRING, allowNull: false },
  //Columna APellido
  last_name: { type: Sequelize.STRING, allowNull: false },
  // Columna, email
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  // columna, password
  password: { type: Sequelize.STRING, allowNull: false },
  // columna, direccion
  address: { type: Sequelize.STRING, allowNull: true },
  //columna, telefono
  phone: { type: Sequelize.STRING, allowNull: true },
});

// user
//   .sync()
//   .then(() => {
//     return user.findAll({
//       where: { email: "epcbox123@gmail.com", password: "12345678" },
//     });
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element.length);
//     });
//   })
//   .catch((err) => {
//     console.log("Error syncing the table and model", err);
//   });

// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.

module.exports = user;
