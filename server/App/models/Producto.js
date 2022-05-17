"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {}
  Producto.init(
    {
      nombre_material: DataTypes.STRING,
      modelo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      imagen: DataTypes.TEXT,
      precio: DataTypes.DECIMAL,
      stock: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "producto",
      tableName: "producto",
    }
  );
  return Producto;
};
