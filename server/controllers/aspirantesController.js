const { Association } = require("sequelize");
const db = require("../db/models");

const aspirantesController = {
  getAll: async (req, res) => {
    const result = await db.Aspirante.findAllFormatted();
    res.json(result);
  },
  create:(req,res)=>{
    const newApplicant = req.body
    db.Aspirante.create(newApplicant)
  }
};

module.exports = aspirantesController;
