const {Sequelize, DataTypes}=require('sequelize');
const config=require('../../config/database')
const db={}

//instanciamos la conexion
db.connection=new Sequelize(config.database,config.username,config.password,config);

//vinculamos los modelos con la conexion
db.fabricante=require('../models/Fabricante')(db.connection,DataTypes);
db.material=require('../models/Material')(db.connection,DataTypes);
db.categoria=require('../models/Categoria')(db.connection,DataTypes);
db.tipoProducto=require('../models/TipoProducto')(db.connection,DataTypes);

//associar los modelos 

//db.ciudad.associate(db);
module.exports=db;

