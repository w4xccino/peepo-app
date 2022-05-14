require('dotenv').config();

module.exports={
  username:process.env.DB_USERNAME || "root",
  password:process.env.DB_PASSWORD || "qFFgEJc2ebNBb0cG",
  database:process.env.DB_DATABASE || "test_app_sena",    
  host:process.env.DB_HOST || "34.176.188.119",
  dialect:process.env.DB_DIALECT || "mysql",
  define:{
    timestamps:false,//para evitar agregar el registo de modificacion
    underscored:true
  },

  //configuarar las migraciones
  migrationStorage:"sequelize",
  migrationStorageTableName:"migrations"

}