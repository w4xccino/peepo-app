const express=require('express');
const router=express.Router();


//importamos las rutas de los controladors
const febricanteController = require('./controller/febricanteController');
const materialController = require('./controller/materialController');

//home
router.get('/pruevaRuta',(req,res)=>res.json("Prueva de rutas"));

// provando haciendo SELECT A LA TABLA
router.get('/usuario',febricanteController.all);
router.get('/usuario',materialController.all);


module.exports=router;