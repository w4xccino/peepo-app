// Inclims el modulo sequelize
const Sequelize = require("sequelize");

// Requerimos de la conexion de la BD
const sequelize = require("../utils/database");

const Usuario = sequelize.define("usuario", {
  id: {
    // Indicamos el tipo de dato INTEGER
    type: Sequelize.INTEGER,

    // Indicamos que sera autoincrementable
    autoIncrement: true,

    // El campo id no estara vacio
    allowNull: false,

    // Indicamos que sera de llave primaria
    primaryKey: true,
  },

  // Columna name
  name: { type: Sequelize.STRING, allowNull: false },

  last_name: { type: Sequelize.STRING, allowNull: false },

  // Columna, email
  email: { type: Sequelize.STRING, allowNull: false },

  // columna, password
  password: { type: Sequelize.STRING, allowNull: true },

  // columna, direccion
  address: { type: Sequelize.STRING, allowNull: false },

  //columna, telefono
  telefono: Sequelize.INTEGER,
});

// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = Usuario;
