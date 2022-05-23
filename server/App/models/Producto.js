"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {      
      this.belongsToMany(models.factura,{through: models.detalleCompra});
    }
  }
  Producto.init(
    {
      modelo: DataTypes.STRING(45),
      descripcion: DataTypes.STRING(80),
      imagen: DataTypes.TEXT,
      modeloRA:DataTypes.TEXT('long'),
      precio: DataTypes.DECIMAL(10,4),
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'producto',
      tableName: 'producto'
    }
  );
  return Producto;
};
