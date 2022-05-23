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
db.producto=require('../models/Producto')(db.connection,DataTypes);
db.usuario=require('../models/Usuario')(db.connection,DataTypes);
db.factura=require('../models/Factura')(db.connection,DataTypes);
db.detalleCompra=require('../models/DetalleCompra')(db.connection,DataTypes);

//associar los modelos
db.tipoProducto.associate(db);
db.fabricante.associate(db);
db.material.associate(db);
db.categoria.associate(db);
db.usuario.associate(db);

db.usuario.associate(db)
db.factura.associate(db)

module.exports=db;

