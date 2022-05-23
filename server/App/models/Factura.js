"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    static associate(models) {      
      this.belongsToMany(models.producto,{through:models.detalleCompra});
    }
  }
  Factura.init(
    {
      fecha: DataTypes.DATE,
      importe_total: DataTypes.DECIMAL(10,4),
    },
    {
      sequelize,
      modelName: 'factura',
      tableName: 'factura'
    }
  );
  return Factura;
};
