const { response } = require("express");
const db = require("../db/models");

const aspirantesController = {
  getAll: async (req, res) => {
    try {
      const result = await db.Aspirante.findAllFormatted();
      if(!result||result.length<=0) throw new Error('No se encontraron aspirantes')
      let response = {
        success: true,
        statusCode:200,
        message:'Solicitud exitosa',
        count: result.length,
        data: result,
        metadata: {
          version: '1.0.0',
          timestamp: new Date(),
        }
      };
      res.json(response)
    } catch (error) {
      console.error('Error al obtener los aspirantes:', error);
      const response = {
        success: false,
        code: 500,
        message: 'Error al procesar la solicitud',
        error: error.message,
        metadata: {
          version: '1.0.0',
          timestamp: new Date(),
        },
      };
      res.status(500).json(response);
    }
  },
  create: (req, res) => {
    const newApplicant = req.body;
    db.Aspirante.create(newApplicant);
  },
};

module.exports = aspirantesController;
