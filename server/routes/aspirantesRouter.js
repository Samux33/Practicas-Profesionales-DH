const express = require("express");
const router = express.Router();
const aspirantesController = require("../controllers/aspirantesController.js");

router.get("/", aspirantesController.getAspirantes);
router.post("/create", aspirantesController.create);

module.exports = router;
