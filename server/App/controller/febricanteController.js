const {fabricante}=require('../dataBase/conexionData');
module.exports={
    async all(req,res){
        let Fabricante=await fabricante.findAll();
        res.json(Fabricante);
    }
}
