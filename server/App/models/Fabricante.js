'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fabricante extends Model {

    static associate(models) {      
      this.hasMany(models.producto);
    }
  }
  Fabricante.init({
    nombre_marca: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'fabricante',
    tableName:'fabricante'
  });
  return Fabricante;
};