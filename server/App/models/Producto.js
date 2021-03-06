"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      this.belongsToMany(models.factura, { through: models.detalleCompra });
    }
  }
  Producto.init(
    {
      modelo: DataTypes.STRING(45),
      descripcion: DataTypes.TEXT,
      imagen: DataTypes.TEXT,
      modeloRA: DataTypes.TEXT("long"),
      precio: DataTypes.DECIMAL(10, 2),
      descuento: DataTypes.DECIMAL(10, 2),
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
