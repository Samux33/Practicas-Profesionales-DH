const db = require("../db/models");

const profesionesController = {
  getAll: async (req, res) => {
    const result = await db.Profesion.findAllFormatted();
    return res.json(result);
  },
};

module.exports = profesionesController;
