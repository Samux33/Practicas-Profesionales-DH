const express = require("express");
const router = express.Router();
const aspirantesController = require("../controllers/aspirantesController.js");
const upload = require("../middlewares/multer.js");

router.get("/", aspirantesController.getAspirantes);

router.post("/create", upload.single("imagen"), aspirantesController.create);

module.exports = router;
