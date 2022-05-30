'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoProducto extends Model {

    static associate(models) {      
      this.hasMany(models.producto)
    }
  }
  TipoProducto.init({
    nombre_tipo_Producto: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'tipoProducto',
    tableName:'tipoProducto'       
  });
  return TipoProducto;
};