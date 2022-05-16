'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {      
      this.belongsTo(models.producto);
      this.belongsTo(models.producto);
      this.belongsTo(models.producto);
      this.belongsTo(models.producto);            
    }
  }  
  Producto.init({
    nombre_material: DataTypes.STRING,    
    modelo:DataTypes.STRING,
    descripcion:DataTypes.STRING,
    imagen: DataTypes.TEXT,
    precio:DataTypes.DECIMAL,
    stock:DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'producto',
    tableName:"producto"
  });
  return Producto;
};