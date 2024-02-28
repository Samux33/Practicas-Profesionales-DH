const { response } = require("express");
const db = require("../db/models");
const { Op } = db.Sequelize;
const validateAspirante = require("../schemas/aspirante.js");

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
    error: error,
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
              {
                [Op.or]: [
                  {
                    [Op.and]: [
                      {
                        nombre: { [Op.like]: `%${searchParam.split(" ")[0]}%` },
                      },
                      {
                        apellido: {
                          [Op.like]: `%${searchParam.split(" ")[1]}%`,
                        },
                      },
                    ],
                  },
                  {
                    [Op.and]: [
                      {
                        apellido: {
                          [Op.like]: `%${searchParam.split(" ")[0]}%`,
                        },
                      },
                      {
                        nombre: { [Op.like]: `%${searchParam.split(" ")[1]}%` },
                      },
                    ],
                  },
                ],
              },
            ],
          }
        : {};
      const result = await db.Aspirante.findAllFormatted({
        where: condition,
      });
      if (!result || result.length <= 0) {
        const error = generateError({
          error:
            "No se encontraron aspirantes que coincidan con el criterio de búsqueda",
          result: [],
          code: 404,
        });
        return res.status(404).json(error);
      }
      const response = generateResponse(result, "Solicitud exitosa");
      res.json(response);
    } catch (error) {
      const response = generateError({
        error: error.message,
        code: 500,
        result: [],
      });
      res.status(500).json(response);
    }
  },
  create: async (req, res) => {
    try {
      const newAspirante = req.body;
      const validationResult = validateAspirante(newAspirante);
      if (validationResult.error) {
        const response = generateError({
          error: JSON.parse(validationResult.error),
          code: 400,
        });
        res.status(400).json(response);
      } else {
        await db.Aspirante.create(newAspirante);
        const result = generateResponse({
          result: newAspirante,
          message: "Aspirante creado exitosamente",
        });
        res.json(result);
      }
    } catch (error) {
      console.error("Error al crear el aspirante: ", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

module.exports = aspirantesController;
