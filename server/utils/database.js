// Include Sequelize module
const Sequelize = require('sequelize')
  
// Creating new Object of Sequelize
const sequelize = new Sequelize(
    'rolando',
    'root',
    'qFFgEJc2ebNBb0cG', {
  
        
        dialect: 'mysql',
  
                   
        host: '34.176.188.119'
    }
);
  
// Exporting the sequelize object. 
// We can use it in another file
// for creating models
module.exports = sequelize