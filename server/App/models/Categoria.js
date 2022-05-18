"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      this.hasMany(models.producto);
    }
  }
  Categoria.init(
    {
      nombre_categoria: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "categoria",
      tableName: "categoria",
    }
  );
  return Categoria;
};
