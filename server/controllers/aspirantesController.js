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

const generateError = ({ error, result, code }) => {
  console.error("Error al obtener los aspirantes:", error);
  const response = {
    success: false,
    code: code,
    message: "Error al procesar la solicitud",
    error: error.message,
    metadata: {
      version: "1.0.0",
      timestamp: new Date(),
    },
    data: result,
  };
  return response;
};

const aspirantesController = {
  getAspirantes: async (req, res) => {
    try {
      const searchParam = req.query.name;
      const condition = searchParam
        ? {
            [Op.or]: [
              { nombre: { [Op.like]: `%${searchParam}%` } },
              { apellido: { [Op.like]: `%${searchParam}%` } },
            ],
            // Buscar combinaciones de palabras en nombre o apellido
            [Op.or]: [
              { nombre: { [Op.like]: `%${searchParam.split(" ")[0]}%` } },
              { apellido: { [Op.like]: `%${searchParam.split(" ")[0]}%` } },
              { nombre: { [Op.like]: `%${searchParam.split(" ")[1]}%` } },
              { apellido: { [Op.like]: `%${searchParam.split(" ")[1]}%` } },
            ],
          }
        : {};
      const result = await db.Aspirante.findAllFormatted({
        where: condition,
      });
      if (!result || result.length <= 0) {
        const error = generateError({
          error: {
            message:
              "No se encontraron aspirantes que coincidan con el criterio de búsqueda",
          },
          result: [],
          code: 404,
        });
        return res.status(404).json(error);
      }
      const response = generateResponse(result, "Solicitud exitosa");
      res.json(response);
    } catch (error) {
      const response = generateError({ error, code: 500, result: [] });
      res.status(500).json(response);
    }
  },
  create: async (req, res) => {
    const newApplicant = req.body;
    db.Aspirante.create(newApplicant);
    res.json(newApplicant);
  },
};

module.exports = aspirantesController;
