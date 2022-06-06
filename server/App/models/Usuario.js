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
      nombre: DataTypes.STRING(45),
      apellido: DataTypes.STRING(45),
      email: {
        type: DataTypes.STRING(45),
        unique: {
          msg: "Correo ya registrado",
        },
        validate: {
          isEmail: {
            msg: "Escriba un correo valido",
          },
          notEmpty: {
            msg: "Ingrese su correo",
          },
        },
      },
      contrasena: DataTypes.STRING(25),
      direccion: DataTypes.STRING(80),
      telefono: DataTypes.CHAR(20),
    },
    {
      sequelize,
      modelName: "usuario",
      tableName: "usuario",
    }
  );
  return Usuario;
};
