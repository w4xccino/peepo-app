"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      this.hasMany(models.factura);
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      email: DataTypes.STRING,
      contrasena: DataTypes.STRING,
      direccion: DataTypes.STRING,
      telefono: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "usuario",
      tableName: "usuario",
    }
  );
  return Usuario;
};
