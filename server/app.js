require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

const aspirantesRouter = require("./routes/aspirantesRouter.js");
const profesionesRouter = require("./routes/profesionesRouter.js");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/aspirantes", aspirantesRouter);
app.use("/profesiones", profesionesRouter);

app.listen(PORT, () => {
  console.log(`servidor abierto en el puerto ${PORT}`);
});
