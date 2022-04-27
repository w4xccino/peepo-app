//Este coigo es para conectar mediante mysql, desinstale mysql del package.json

const mysql = require('mysql');

//Conexion con los parametros ala BD
const conexion = mysql.createConnection({
	host: '34.176.188.119',
	user: 'root',
	password: 'qFFgEJc2ebNBb0cG',
	database: 'rolando'
})


//Prueba de la conexion
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA')
    }


});

//Exportar la conexion
module.exports = conexion;
//finalizar la coneccion
//conexion.end();