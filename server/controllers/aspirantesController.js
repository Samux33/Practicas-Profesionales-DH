const { response } = require("express");
const db = require("../db/models");
const { Op } = db.Sequelize;

const generateResponse = (result, message) => {
  const response = {
    success: true,
    statusCode: 200,
    message: message,
    count: result.length,
    data: result,
    metadata: {
      version: "1.0.0",
      timestamp: new Date(),
    },
  };
  return response;
};

const generateError = (error) => {
  console.error("Error al obtener los aspirantes:", error);
  const response = {
    success: false,
    code: 500,
    message: "Error al procesar la solicitud",
    error: error.message,
    metadata: {
      version: "1.0.0",
      timestamp: new Date(),
    },
  };
  return response;
};

const aspirantesController = {
  getAll: async (req, res) => {
    try {
      const result = await db.Aspirante.findAllFormatted();
      if (!result || result.length <= 0)
        throw new Error("No se encontraron aspirantes");
      const response = generateResponse(result, "Solicitud exitosa");
      res.json(response);
    } catch (error) {
      const response=generateError(error)
      res.status(500).json(response);
    }
  },
  create: async (req, res) => {
    const newApplicant = req.body;
    db.Aspirante.create(newApplicant);
    res.json(newApplicant);
  },
  search: async (req, res) => {
    try {
      const searchParam = req.query.name;
      const aspirantes = await db.Aspirante.findAllFormatted({
        where: [{ nombre: { [Op.like]: `%${searchParam}%` } }],
      });

      if (aspirantes.length <= 0) {
        throw new Error(
          "No se encontró ningún aspirante que coincida con el criterio de búsqueda"
        );
      }

      const response=generateResponse(aspirantes,"Búsqueda exitosa")
      res.json(response);
    } catch (error) {
      const response =generateError(error)
      res.status(500).json(response);
    }
  },
};

module.exports = aspirantesController;
