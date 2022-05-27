require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || 'mysql',
  define: {
    timestamps: false, //para evitar agregar el registo de modificacion
    underscored: true,
  },

  //configuarar las migraciones
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};
