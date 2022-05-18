require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_DATABASE || 'prac_model_data_dev',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: false, //para evitar agregar el registo de modificacion
    underscored: true,
  },

  //configuarar las migraciones
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};
