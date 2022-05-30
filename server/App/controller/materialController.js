const {material}=require('../dataBase/conexionData');
module.exports={
    async all(req,res){
        let Material=await material.findAll();
        res.json(Material);
    }
}
