'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoProducto extends Model {

    static associate(models) {      
      
    }
  }
  TipoProducto.init({
    nombre_tipo_Producto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipoProducto',
    tableName:"tipoProducto"       
  });
  return TipoProducto;
};