'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fabricante extends Model {

    static associate(models) {      
      //this.hasOne(models.usuario);
    }
  }
  Fabricante.init({
    nombre_marca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fabricante',
  });
  return Fabricante;
};