"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetalleCompra extends Model {}
  DetalleCompra.init(
    {
      id_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      cantidad: DataTypes.FLOAT,
      precio: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "detalle_compra",
      tableName: "detalle_compra",
    }
  );
  return DetalleCompra;
};
