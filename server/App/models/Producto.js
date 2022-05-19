"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {}
  Producto.init(
    {
      modelo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      imagen: DataTypes.TEXT,
      precio: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "producto",
      tableName: "producto",
    }
  );
  return Producto;
};