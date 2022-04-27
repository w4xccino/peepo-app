// Import the sequelize object on which
// we have defined model.
const sequelize = require('./utils/database')
  
// Import the user model we have defined
const User = require('./models/user')
  
  
/*Para crear el modelo, podemos utilizar una de las siguientes formas:
Método sync(): Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, no lo sobrescribirá.
sync ({force: true}) Método: Este método creará un modelo si el modelo no existe, sin embargo, si ya existe, lo sobrescribirá.*/
sequelize.sync()
  

//sequelize.sync({force:true})