const { Association } = require("sequelize");
const db = require("../db/models");

const aspirantesController = {
  getAll: async (req, res) => {
    const result = await db.Aspirante.findAllFormatted();
    res.json(result);
  },
  create: async (req, res) => {},
};

module.exports = aspirantesController;
