const { usuario } = require("../dataBase/conexionData");

module.exports = {
  async all(req, res) {
    let Usuario = await usuario.findAll();
    res.json(Usuario);
  },
};
