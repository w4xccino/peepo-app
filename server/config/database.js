require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || '@V!qgnglKXKq',
  password: process.env.DB_PASSWORD || 'rYi9?2dQqPlubuVj',
  database: process.env.DB_DATABASE || 'test_app_sena',
  host: process.env.DB_HOST || '34.176.188.119',
  dialect: process.env.DB_DIALECT || 'mysql',
  define: {
    timestamps: false, //para evitar agregar el registo de modificacion
    underscored: true,
  }  
};
