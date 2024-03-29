require("dotenv").config();
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

const aspirantesRouter = require("./routes/aspirantesRouter.js");
const profesionesRouter = require("./routes/profesionesRouter.js");

app.use(cors());
app.use(express.json());
app.use(express.static("upload"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/aspirantes", aspirantesRouter);
app.use("/profesiones", profesionesRouter);

app.listen(PORT, () => {
  console.log(`servidor abierto en el puerto ${PORT}`);
});
