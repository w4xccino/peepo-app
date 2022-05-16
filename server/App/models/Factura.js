'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {

    static associate(models) {      
      this.belongsTo(models.factura);
      this.belongsTo(models.factura);      
    }
  }
  Factura.init({
    fecha: DataTypes.DATE,
    importe_total:DataTypes.DECIMAL
  }, {
    sequelize,
    modelName:'factura',
    tableName:'factura'
  });
  return Factura;
};