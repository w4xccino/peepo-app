'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {

    static associate(models) {      
      
    }
  }
  Material.init({
    nombre_material: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'material',
    tableName:"material"       
  });
  return Material;
};